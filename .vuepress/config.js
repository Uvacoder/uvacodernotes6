module.exports = {
  title: "Pol's Coding Notes",
  description: 'Learning in public',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#29d396"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#29d396"}],
    ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#29d396"}],
  ],
  themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: '📝Notes', link: '/notes/' },
        { text: 'Check out my site', link: 'https://polmilian.dev/' },
        { text: 'Hire me', link: 'https://www.linkedin.com/in/pol-milian-707a214b/' },
        { text: 'Get in touch', link: 'mailto:pol.milian.dev@gmail.com' },
      ],
      sidebar: {
      '/notes/': [
        '',
        'AWS',
        'AR',
        'css',
        'canvas',
        'css-grid',
        'svg-animation',
        'design',
        'figma',
        'git',
        'javascript',
        'javascript30',
        'javascript-algorithms',
        'front-end-interview',
        'gatsby',
        'nodejs',
        'react',  
        'react-native',
        'redux',
        'testing-react',
        'threejs',
        'vue',
        'typescript',
        'PHP'
      ]
    }
  }
}
