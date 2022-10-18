module.exports = {
  branches: 'master',
  repositoryUrl:
    'https://github.com/arpan-smartend/github_actions_react_app.git',

  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github'
  ]
}
