import {defineConfig} from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'iAkii开发',
    logo: "/logo.png",
    footer: false,
    nav: [
      {title: 'Plugins', link: '/plugins'},
      {title: 'iClip', link: '/iclip'},
      {title: 'iPaper', link: '/ipaper'},
      {title: 'Github', link: 'https://github.com/xiyionxiong'}
    ],
  },
});
