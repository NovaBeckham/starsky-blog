/*
 * @Description:
 * @Author: hyx
 * @Date: 2024-01-16 10:57:16
 */

interface ConfigRoutes {
  name: string
  path: string
  i18n: {
    cn: string
    en: string
  }
  children: ConfigRoutes[]
}

const routes: ConfigRoutes[] = [
  {
    name: "Home",
    path: "/",
    i18n: {
      cn: "首页",
      en: "Home",
    },
    children: [],
  },
  {
    name: "Talks",
    path: "/talks",
    i18n: {
      cn: "说说",
      en: "talks",
    },
    children: [],
  },
  {
    name: "About",
    path: "/about",
    i18n: {
      cn: "关于",
      en: "About",
    },
    children: [],
  },
  {
    name: "Archives",
    path: "/archives",
    i18n: {
      cn: "归档",
      en: "Archives",
    },
    children: [],
  },
  {
    name: "Tags",
    path: "/tags",
    i18n: {
      cn: "标签",
      en: "Tags",
    },
    children: [],
  },
  {
    name: "Message",
    path: "/message",
    i18n: {
      cn: "留言",
      en: "Message",
    },
    children: [],
  },
  {
    name: "Friends",
    path: "/friends",
    i18n: {
      cn: "友链",
      en: "Friends",
    },
    children: [],
  },
]

export { routes }
