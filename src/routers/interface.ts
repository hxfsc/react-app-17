export interface RouteMenuProps {
  title: string
  path: string
  icon?: string
  parent?: string
  component?: React.LazyExoticComponent<React.ComponentType> | any
  children?: RouteMenuProps[]
}
