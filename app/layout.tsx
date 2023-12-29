import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import { TeamSwitcher } from "@/app/team_switcher"
import { Search } from "@/app/search"
import { UserNav } from "@/app/user_nav"
import SideMargin from "@/components/ui/sidemargin"
import { TabView } from "@/app/tabs"
import Link from 'next/link'

import { cn } from "@/lib/utils"
 
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="z-10 border-b h-16 sticky top-0 bg-white">
          <div className="flex h-16 items-center px-4">
            <Link href="/">
              <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight pr-6">
                saku
              </h1>
            </Link>
            <Search />
            <div className="ml-auto flex items-center space-x-4">
              <TeamSwitcher />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex items-top px-4 py-12">
          <SideMargin />
            {children}
          <SideMargin />
        </div>
      </body>
    </html>
  )
}
