/*
 * @Description:
 * @Author: hyx
 * @Date: 2024-01-16 17:50:52
 */

import { defineStore } from "pinia"

export const useDropdownStore = defineStore("dropdownStore", {
  state: () => {
    return {
      commandName: "",
      uid: 0,
    }
  },
  actions: {
    setCommand(name: string) {
      this.commandName = name
    },
    setUid() {
      this.uid = Date.now()
      return this.uid
    },
  },
})
