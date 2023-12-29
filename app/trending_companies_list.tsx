import { ChevronDownIcon, DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function TrendingCompaniesList() {
  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle>Trending Today</CardTitle>
        <CardDescription>
          The most active platforms today.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center flex-1">
          <div className="flex-1">
            <p className="text-sm font-medium leading-none">Suno.ai</p>
            <p className="text-sm text-muted-foreground">Make any song you can imagine!</p>
          </div>
          <Avatar className="flex-none">
            <AvatarImage src="/01.png" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex pt-2 space-x-2">
          <Button variant="outline" size="icon">
            <DiscordLogoIcon className="" />
          </Button>
          <Button variant="outline" size="icon">
            <GitHubLogoIcon className="" />
          </Button>
          <Button variant="outline" size="icon">
            <InstagramLogoIcon className="" />
          </Button>
          <Button variant="outline" size="icon">
            <LinkedInLogoIcon className="" />
          </Button>
        </div>

        <Separator className="my-4"/>

        <div className="flex items-center flex-1">
          <div className="flex-1">
            <p className="text-sm font-medium leading-none">Wondershare Virbo</p>
            <p className="text-sm text-muted-foreground">Virbo enables users to create AI Avatar video.</p>
          </div>
          <Avatar className="flex-none">
            <AvatarImage src="/01.png" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex pt-2 space-x-2">
          <Button variant="outline" size="icon">
            <DiscordLogoIcon className="" />
          </Button>
          <Button variant="outline" size="icon">
            <GitHubLogoIcon className="" />
          </Button>
          <Button variant="outline" size="icon">
            <InstagramLogoIcon className="" />
          </Button>
          <Button variant="outline" size="icon">
            <LinkedInLogoIcon className="" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
