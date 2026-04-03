
type MenuItem = {
    label: string | null
    icon?: string
    link: string
    isActive?: boolean, 
    subItems?: MenuItem[] | null
}

export default MenuItem;
