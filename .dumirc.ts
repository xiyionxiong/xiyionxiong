import {defineConfig} from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'iAkii开发',
    logo: "/logo.png",
    footer: false,
    base: '/xiyionxiong/',
    nav: [
      {title: 'iPaper', link: '/ipaper'},
      {title: 'iClip', link: '/iclip'},
      {title: 'Plugins', link: '/plugins'},
      {title: 'Github', link: 'https://github.com/xiyionxiong'}
    ],
  },
});
