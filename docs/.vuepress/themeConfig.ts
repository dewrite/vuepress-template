import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  // hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Michael Lee",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",
  themeColor: false,

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: false,

  footer: "Written by Michael Lee | Copyright © 2022 DeWrite.io",
  
  copyright: false,

  displayFooter: true,

  pure: true,

  fullscreen: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "A FrontEnd programmer",
    medias: {
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // comment: {
    //   /**
    //    * Using giscus
    //    */
    //   type: "giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",

    //   /**
    //    * Using twikoo
    //    */
    //   // type: "twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",

    //   /**
    //    * Using Waline
    //    */
    //   // type: "waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
