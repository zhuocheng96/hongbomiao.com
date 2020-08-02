module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'unused-css-rules': ['warn', { minScore: 0 }],
        'unused-javascript': ['warn', { minScore: 0 }],
        'uses-rel-preconnect': ['warn', { minScore: 0 }],
      },
    },
  },
};