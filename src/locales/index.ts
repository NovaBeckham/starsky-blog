/*
 * @Description:
 * @Author: hyx
 * @Date: 2024-01-16 15:41:40
 */

import { createI18n } from "vue-i18n"
import enLocale from "./languages/en.json"
import cnLocale from "./languages/cn.json"

export const i18n = createI18n({
  locale: localStorage.getItem("locale") ?? "cn",
  fallbackLocale: localStorage.getItem("locale") ?? "cn",
  messages: { en: enLocale, cn: cnLocale },
})
