
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
      children: ['algo/tree', 'algo/searchAlgo', 'algo/sort'],
    },
    {
      title: 'JavaScript',
      collapsable: true,
      children: ['js/js'],
    },
    {
      title: 'TypeScript',
      collapsable: true,
      children: ['ts/ts'],
    },
    {
      title: 'Vue',
      collapsable: true,
      children: ['vue/vue2','vue/vue3','vue/vueRouter','vue/computed','vue/watched','vue/nextTick','vue/keep-alive'],
    },
    {
      title: 'LeetCode',
      collapsable: true,
      children: ['leetCode/03','leetCode/04','leetCode/05','leetCode/06','leetCode/07','leetCode/11'],
    },
    {
      title: 'Webpack',
      collapsable: true,
      children: ['webpack/webpack'],
    },
    {
      title: 'Node',
      collapsable: true,
      children: ['node/node'],
    },
    {
      title: '设计模式',
      collapsable: true,
      children: ['design/design'],
    },
    
  ];
}