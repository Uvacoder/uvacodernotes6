module.exports = {
  title: "Pol's Coding Notes",
  description: 'Learning in public',
  themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Notes', link: '/notes/' },
        { text: 'External', link: 'https://google.com' },
      ],
      sidebar: {
      '/notes/': [
        '',  
        'contact'
      ]
    }
  }
}