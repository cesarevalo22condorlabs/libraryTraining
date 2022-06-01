module.exports = {
    Settings: {
      host: process.env.REDIS_HOST || "127.0.0.1",
      port: process.env.REDIS_PORT || 6379,
    },
    keyName: 'test:condorlabs-npm-helpers:counter'
  };