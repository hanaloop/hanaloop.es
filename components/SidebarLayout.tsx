import MenuItem from "../libs/MenuItem"
import SideMenu from "./SideMenu"

type LayoutProps = {
  menu?: MenuItem,
  meta?: any,
  children: JSX.Element,
  padding?: boolean
}

export default function SidebarLayout({ children, meta, menu, padding = true }: LayoutProps) {

  const style = padding ? "p-4": "";

  return (
    <>
      {/* From : https://bjornlindholm.com/snippets/fixed-sidebar-scrollable-content/ */}
      <div className="">
        <div className="flex">
          <aside className="h-screen sticky shrink-0 w-52">
            <SideMenu menu={menu}/>
          </aside>

          <main className={`${style} w-full `}>
            {children}
          </main>
        </div>
      </div>
      </>
  )
}
