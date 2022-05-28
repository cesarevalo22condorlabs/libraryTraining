module.exports.mongoDbSettings = {
    Settings: {
      host: "exapmle-shard-00-00-8burs.mongodb.net,exapmle-shard-00-01-8burs.mongodb.net,exapmle-shard-00-02-8burs.mongodb.net",
      port: 27017,
      database: "dev",
      user: "my-user",
      password: "superSecretPass",
      replicaSet: "compliance-support-shard-0",
      ssl: true,
      authSource: "admin",
    },
  };