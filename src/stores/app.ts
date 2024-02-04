/*
 * @Description:
 * @Author: hyx
 * @Date: 2024-01-31 11:39:14
 */

import { defineStore } from "pinia"

const setTheme = (theme: string) => {
  if (theme === "theme-dark") {
    document.body.classList.remove("theme-light")
    document.body.classList.add("theme-dark")
  } else {
    document.body.classList.remove("theme-dark")
    document.body.classList.add("theme-light")
  }
}

export const useAppStore = defineStore("appStore", {
  state: () => {
    return {
      themeConfig: {
        feature: true,
        header_gradient_css:
          "linear-gradient(130deg, #24c6dc, #5433ff 41.07%, #ff0099 76.05%)",
      },
    }
  },
  actions: {
    initializeTheme(mode: string) {
      setTheme(mode)
    },
  },
})
