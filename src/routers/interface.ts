export interface RouteMenuProps {
  title: string
  path: string
  parent?: string
  component?: React.LazyExoticComponent<React.ComponentType> | any
  children?: RouteMenuProps[]
}
