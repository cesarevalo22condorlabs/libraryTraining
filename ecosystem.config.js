module.exports = {
    apps: {
        name: 'library-training',
        script: './dist/index.js',
        watch: true,
        interpreter: './node_modules/.bin/babel-node',
        env: {
            NODE_ENV: 'development',
        },
        env_production: {
            NODE_ENV: 'production',
        }
    },
}