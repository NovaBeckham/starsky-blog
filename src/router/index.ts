/*
 * @Description:
 * @Author: hyx
 * @Date: 2024-01-12 16:59:18
 */

import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router