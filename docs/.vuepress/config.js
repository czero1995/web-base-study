
module.exports = {
  title: 'web-base',
  description: 'web-base',
  port: '5000',
  plugins: [
    '@vuepress/back-to-top',
    'demo-block'
  ],
  themeConfig: {
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '项目', link: 'https://git.benewtech.cn/chenzehao/new_cms' },
    ],
    sidebar: {
      '/guide/': guideSidebar(),
    },
  },
};

function guideSidebar() {
  return [
    {
      title: '项目简介',
      collapsable: true,
      children: ['',],
    },
    {
      title: '数据结构和算法',
      collapsable: true,
      children: ['tree', 'searchAlgo', 'sort'],
    }
  ];
}