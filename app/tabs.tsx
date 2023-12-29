import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { DemoGithub } from "@/app/article_card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function TabView() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <div className="h-12">
      <TabsList>
        <TabsTrigger value="overview">
          Discover
        </TabsTrigger>
        <TabsTrigger value="analytics">
          Following
        </TabsTrigger>
        <TabsTrigger value="reports">
          Trending
        </TabsTrigger>
        <TabsTrigger value="notifications">
          Polls
        </TabsTrigger>
      </TabsList>
      </div>
        <TabsContent value="overview" className="space-y-4">
            <DemoGithub />
            <DemoGithub />
            <DemoGithub />
            <DemoGithub />
            <DemoGithub />
            <DemoGithub />
            <DemoGithub />
            <DemoGithub />
        </TabsContent>
      <TabsContent value="notifications" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          hello
        </div>
      </TabsContent>
    </Tabs>
  )
}
