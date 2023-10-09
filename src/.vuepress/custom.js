/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "CNYoki",
    repo: "CNYoki.github.io",
    clientId: "89da6e2701fa0b09508b",
    clientSecret: "000ccaa340a7aab3f645188e2c87a09ec7a46875"
  },

  repoConfig: {
    owner: "CNYoki",
    repo: "CNYoki.github.io",
    pushBranch: "master",
    email: "i@yokii.cn",
    filterUsers: ['Yoki']
  },

  title: "Yoki@Sin55",
  description: "在这里了解我的一切，对编程的热爱永不停歇。",
  customDomain: "",
  base: "/Issue-Blog-With-Github-Action/",

  slogan: {
    main: "有逻辑的灵魂，",
    sub: "造就有温度的编码。"
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/Issue-Blog-With-Github-Action"
      },
      {
        name: "Github",
        link: "https://github.com/Yidadaa"
      },
      {
        name: "CV",
        link: "/Issue-Blog-With-Github-Action/cv.html"
      }
    ],
    headTitle: ["暮春早夏的月亮", "原是情人的月亮，不比秋冬是诗人的月亮"],
    friendLinks: [
      {
        name: "watercow",
        link: "https://github.com/watercow/watercow.github.io/issues"
      },
      {
        name: "ycjgg",
        link: "https://ycjgg.github.io"
      }
    ],
    extraFooters: [
      {
        title: "ABOUT",
        text: "@ 蜀 ICP 备 19000509 号 - 1",
        link: "https://beian.miit.gov.cn/"
      }
    ],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://avatars2.githubusercontent.com/u/16968934?s=460&v=4"
      }
    ]
  ]
}

module.exports = mainConfig
