import Link from "next/link"

export type NavLinkProps = {
  item: {
    type?: string // Content type: 'docs',
    contentId?: string // 'intro',
    href?: string // 'https://gitlab.com/hanaloop/next-dev-portal',
    to?: string // '/about', 
    label: string // 'About', 
    position?: string // 'left'
    style?: string
  }
}

export default function NavLink({item}: NavLinkProps) {
  // Either doc or href or to
  const link = (item.type) ? `/${item.type}`
    : ( (item.href) ? item.href : item.to);

  /* v2.1 */
  return <Link href={link!} passHref>
    <a className={`${item.style} hover:underline decoration-4 underline-offset-4 decoration-lime-700 whitespace-nowrap`}>{item.label}</a>
    </Link>
}
