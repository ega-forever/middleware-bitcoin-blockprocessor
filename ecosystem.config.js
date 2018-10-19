module.exports = {
  apps: [
    {
      name: 'middleware-bitcoin-blockprocessor',
      script: './index.js',
      watch: true,
      env: {
        PORT: 8080,
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 8080,
        NODE_ENV: 'production',
        NODE_CONFIG_ENV: 'production'
      },
      env_develop: {
        PORT: 8080,
        NODE_ENV: 'development',
        NODE_CONFIG_ENV: 'develop'
      },
      env_stage: {
        PORT: 8080,
        NODE_ENV: 'production',
        NODE_CONFIG_ENV: 'stage'
      }
    }
  ]
}
