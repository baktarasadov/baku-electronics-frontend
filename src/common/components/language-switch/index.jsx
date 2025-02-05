import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/common/components";

export function LanguageSwitch() {
  return (
    <Select defaultValue="aze">
      <SelectTrigger className="border-none focus:ring-0 focus:ring-offset-0 focus:outline-none p-0 w-[41px] font-bold text-md font-sfpro">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className={"bg-white dark:bg-jet"}>
        <SelectGroup>
          <SelectItem value="aze">Aze</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
