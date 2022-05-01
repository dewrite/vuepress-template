import { defineHopeConfig, defineThemeConfig, defineNavbarConfig} from "vuepress-theme-hope";

const navbar = defineNavbarConfig([
  "/",
]);
const themeConfig = defineThemeConfig({
  // hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: " ",
  },

  iconPrefix: "iconfont icon-",

  logo: "http://127.0.0.1:9000/20220425/c980bc553fd2dd219f6a16650651d7b7.jpg",

  bgImage: "http://127.0.0.1:9000/20220425/38db3a21f35b02ae135c8ce82e29c736.jpeg",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",
  themeColor: false,

  // docsDir: "demo/src",
  // navbarAutoHide: 'always',
  // navbar
  navbar: navbar,
  // sidebar
  sidebar: false,

  footer: "Written by  | Copyright © 2022 DeWrite.io",
  
  copyright: false,

  displayFooter: true,

  pure: true,

  // darkmode: "switch",

  fullscreen: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word", "PageView"],

  blog: {
    description: " ",
    roundAvatar: true,
    medias: {
    },
  },

  // encrypt: {
  //   config: {
  //     "/guide/encrypt.html": ["1234"],
  //   },
  // },

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


export default defineHopeConfig({
  lang: "zh-CN",
  title: " ",
  description: " ",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    ['script', {}, `
setTimeout(() => {
  var h1 = document.querySelector('.blog-hero h1')
  h1.innerText = h1.innerText.replace('Home |','')
}, 300);
`]
    // ['script', {src: '/patch.js?s=' + new Date().getTime()}]
  ],

  themeConfig,
});
