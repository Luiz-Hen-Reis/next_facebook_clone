import { useSession } from "next-auth/react"
import SidebarRow from "./SidebarRow";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon
} from "@heroicons/react/solid";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon
} from "@heroicons/react/outline";


const Sidebar = () => {
    const { data: session } = useSession();

  return (
    <div className="p-2 max-w-[600px] xl:min-w-[300px]">
        <SidebarRow src={session!.user.image} title={session!.user.name} />
        <SidebarRow Icon={UserIcon} title='Friends' />
        <SidebarRow Icon={UserGroupIcon} title='Groups' />
        <SidebarRow Icon={ShoppingBagIcon} title='Marketplace' />
        <SidebarRow Icon={DesktopComputerIcon} title='Watch' />
        <SidebarRow Icon={CalendarIcon} title='Events' />
        <SidebarRow Icon={ClockIcon} title='Memories' />
        <SidebarRow Icon={ChevronDownIcon} title='See More' />
    </div>
  )
}

export default Sidebar