import { NavLink } from "react-router"
import { Button } from "../ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { SidebarNavItem } from "./SidebarNavItem"
import { BookUser, BriefcaseBusiness, Gamepad2, Gift, LayoutDashboard, MapPin, MessageCircleQuestion, Tag } from "lucide-react"
import BohemiaCareersLogo from "./CareersLogo"

const MenuSideBar = () => {
  const links = [
    { to: '/', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/positions', label: 'Positions', icon: BriefcaseBusiness},
    { to: '/disciplines', label: 'Disciplines', icon: BookUser},
    { to: '/vegetables', label: 'Projects', icon: Gamepad2},
    { to: '/hobbies', label: 'Hobbies', icon: MapPin},
    { to: '/benefits', label: 'Benefits', icon: Gift},
    { to: '/faq', label: 'FAQ', icon: MessageCircleQuestion}
  ]

  return (
    <aside className="w-64 h-screen border-r bg-primary p-4 space-y-4 ">
      <div className="pb-4">
        <BohemiaCareersLogo/>
      </div>
      <NavigationMenu orientation="vertical">
        <NavigationMenuList className="flex flex-col gap-2">
          {links.map(link => (
            <SidebarNavItem key={link.label} to={link.to} icon={link.icon} label={link.label} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </aside>
  )
}

export default MenuSideBar
