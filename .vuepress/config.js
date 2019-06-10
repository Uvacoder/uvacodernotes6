module.exports = {
  title: "Pol's Coding Notes",
  description: 'Learning in public',
  themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Notes', link: '/notes/' },
        { text: 'About me', link: 'https://www.linkedin.com/in/pol-milian-707a214b/' },
      ],
      sidebar: {
      '/notes/': [
        '',
        'css',
        'css-grid',
        'design',
        'javascript-algorithms',
        'front-end-interview',  
        'react-native',
        'redux',

      ]
    }
  }
}