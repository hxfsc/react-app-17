import { pathToRegexp } from "path-to-regexp"

import { routers as oldRouters } from "./routers"

import { RouteMenuProps } from "./interface"

const formatRouter = (router: RouteMenuProps[], parentPath = ""): RouteMenuProps[] => {
  const newRouter = router.map((item: RouteMenuProps) => {
    const path = `${parentPath}/${item.path}`
    let result: RouteMenuProps = {
      ...item,
      path
    }
    if (item.children && item.children.length > 0) {
      result.children = formatRouter(item.children, path)
    }
    return result
  })
  return newRouter
}

const flatToMenu = (menu: RouteMenuProps[] = []): RouteMenuProps[] => {
  if (Array.isArray(menu)) {
    return menu.reduce((prev: RouteMenuProps[], next: RouteMenuProps): RouteMenuProps[] => {
      prev.push(next)
      if (next.children) {
        return [...prev, ...flatToMenu(next.children)]
      }
      return prev
    }, [])
  }
  return []
}

const routerMatchMenu = (flatMenu: RouteMenuProps[] = [], urlPaths: string[] = []): string[] => {
  if (Array.isArray(urlPaths) && Array.isArray(flatMenu)) {
    return urlPaths.reduce((prev: string[], next: string): string[] => {
      return [...prev, ...flatMenu.filter((menu) => pathToRegexp(menu.path).test(next)).map((item) => item.path)]
    }, [])
  }
  return []
}

const routerMatchBreadcrumb = (routers: RouteMenuProps[], urlPaths: string[]): RouteMenuProps[] => {
  const flatRouters = flatToMenu(routers)
  return urlPaths.map((item: string): RouteMenuProps => {
    return flatRouters.find((router) => pathToRegexp(item).test(router.path))
  })
}

const routers = formatRouter(oldRouters)

export { routers, routerMatchMenu, flatToMenu, routerMatchBreadcrumb }
