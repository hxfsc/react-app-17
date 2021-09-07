import React, { lazy } from "react"
import { RouteMenuProps } from "./interface"

const DashboardAccount = lazy(() => import("@/pages/dashboard"))
const AccountUser = lazy(() => import("@/pages/account/user"))
const AccountRole = lazy(() => import("@/pages/account/role"))
const AccountPermisson = lazy(() => import("@/pages/account/permission"))

export const routers: RouteMenuProps[] = [
  {
    title: "预览",
    path: "dashboard",
    children: [
      {
        title: "分析页",
        path: "account",
        component: DashboardAccount
      },
      {
        title: "监控页",
        path: "role"
      },
      {
        title: "工作台",
        path: "permission"
      }
    ]
  },
  {
    title: "列表",
    path: "/table",
    children: [
      {
        title: "简单表格",
        path: "/simple"
      },
      {
        title: "高级表格",
        path: "/advanced"
      },
      {
        title: "表格搜索",
        path: "/search"
      }
    ]
  },
  {
    title: "详情页",
    path: "/profile",
    children: [
      {
        title: "简单",
        path: "/simple"
      },
      {
        title: "高级",
        path: "/advanced"
      }
    ]
  },
  {
    title: "管理中心",
    path: "account",
    children: [
      {
        title: "用户管理",
        path: "user",
        component: AccountUser
      },
      {
        title: "角色管理",
        path: "role",
        component: AccountRole
      },
      {
        title: "权限管理",
        path: "permission",
        component: AccountPermisson
      }
    ]
  }
]
