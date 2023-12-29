import { Input } from "@/components/ui/input"

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="w-[100px] md:w-[300px] lg:w-[500px]"
      />
    </div>
  )
}
