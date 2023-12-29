import { MainNav } from "@/app/top_nav"
import { TabView } from "@/app/tabs"
import { Separator } from "@/components/ui/separator"
import { DemoGithub } from "@/app/article_card"
import { TrendingCompaniesList } from "@/app/trending_companies_list"

export default function Home() {
  return (
    <>
      <div className="flex-1 pr-4"> 
        <TabView />
      </div>
      <div className="flex-none w-3/12"> 
        <TrendingCompaniesList />
      </div>
    </>
  )
}
