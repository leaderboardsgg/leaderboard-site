module.exports = {
  ci: {
    assert: {
      assertions: {
        'installable-manifest': 'off',
        'unused-javascript': 'off',
      },
      preset: 'lighthouse:recommended',
    },
    collect: {
      startServerCommand: 'npm run start',
      url: ['http://localhost:3000/'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
