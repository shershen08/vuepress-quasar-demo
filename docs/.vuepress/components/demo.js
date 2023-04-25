function foo () {
    return ({
      dest: '../../vuepress',
      locales: {
        '/': {
          lang: 'en-US',
          title: 'VuePress',
          description: 'Vue-powered Static Site Generator'
        },
        '/zh/': {
          lang: 'zh-CN',
          title: 'VuePress',
          description: 'Vue 驱动的静态网站生成器'
        }
      },
    })
  }
