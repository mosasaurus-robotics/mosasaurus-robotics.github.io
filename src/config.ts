import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://mosasaurus-robotics.github.io/',
  base: '/',
  title: '征龙凌沧Mosasaurus',
  description: 'RoboMaster 实验室技术博客、招新通知、实验室新闻与在线工具',
  author: '征龙凌沧Mosasaurus',
  lang: 'zh-Hans',
  ogLocale: 'zh_CN',
  imageDomains: [],
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/blog',
      title: '技术博客',
      displayMode: 'alwaysText',
      text: '博客',
    },
    {
      path: '/announcement',
      title: '招新通知',
      displayMode: 'alwaysText',
      text: '招新',
    },
    {
      path: '/news',
      title: '实验室新闻',
      displayMode: 'alwaysText',
      text: '新闻',
    },
    {
      path: '/tools',
      title: '在线工具',
      displayMode: 'alwaysText',
      text: '工具',
    },
  ],
  socialLinks: [],
  navBarLayout: {
    left: [],
    right: ['internalNavs', 'hr', 'searchButton', 'themeButton', 'rssLink'],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: false,
  postView: {
    postMetaStyle: 'minimal',
    useCoverAltAsCaption: true,
  },
  externalLink: {
    newTab: true,
    cursorType: '',
    showNewTabIcon: false,
  },
}

export const FEATURES: Features = {
  slideEnterAnim: [true, { enterStep: 60 }],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'right',
      displayMode: 'content',
    },
  ],
  share: false,
  giscus: false,
  search: [
    true,
    {
      includes: ['blog', 'announcement', 'news', 'tools'],
      filter: true,
      navHighlight: true,
      batchLoadSize: [true, 5],
      maxItemsPerPage: [true, 3],
    },
  ],
  tag: [
    true,
    {
      displayPosition: 'right',
      displayMode: 'content',
      filterMode: 'AND',
    },
  ],
}
