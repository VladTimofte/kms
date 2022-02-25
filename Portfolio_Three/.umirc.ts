import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { exact: true, path: '/', redirect: '/home' },
    { path: '/home', component: '@/index/App.js' },



    // { path: '/about-me', component: '@/index/App.js' },
    // { path: '/what-i-do', component: '@/index/App.js' },
    // { path: '/resume', component: '@/index/App.js' },
    // { path: '/portfolio', component: '@/index/App.js' },
    // { path: '/contact', component: '@/index/App.js' },
  ],
  fastRefresh: {},
});
