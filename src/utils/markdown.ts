/*
 * @Description:
 * @Author: hyx
 * @Date: 2024-02-01 15:49:04
 */

import MarkdownIt from "markdown-it"
import MarkdownItKatexExternal from "markdown-it-katex-external"
import { full as Emoji } from "markdown-it-emoji"
import MarkdownItContainer from "markdown-it-container"
import MarkdownItSup from "markdown-it-sup"
import MarkdownItSub from "markdown-it-sub"
import MarkdownItFootnote from "markdown-it-footnote"
import MarkdownItAbbr from "markdown-it-abbr"
import MarkdownItIns from "markdown-it-ins"
import MarkdownItMark from "markdown-it-mark"
import MarkdownItKatex from "markdown-it-katex"

export function markdownToHtml(content: any) {
  const md = new MarkdownIt({
    html: true,
  })
    .use(MarkdownItKatexExternal)
    .use(Emoji)
    .use(MarkdownItContainer, "hljs-center") // 容器插件
    .use(MarkdownItContainer, "hljs-left")
    .use(MarkdownItContainer, "hljs-right")
    .use(MarkdownItSup) // 上角标插件
    .use(MarkdownItSub) // 下角标插件
    .use(MarkdownItFootnote) // 脚注插件
    .use(MarkdownItAbbr) // 缩写插件
    .use(MarkdownItIns) // 插入插件
    .use(MarkdownItMark) // 标记插件
    .use(MarkdownItKatex)
  return md.render(content)
}
