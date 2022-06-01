module.exports.mongoDbSettings = {
    Settings: {
      host: process.env.MONGO_HOST || "localhost",
      port: process.env.MONGO_PORT || 27017,
      database: process.env.MONGO_DB || "libraryTraining",
      user: process.env.MONGO_USER || "",
      password: process.env.MONGO_PASSWORD || "",
      ssl: process.env.MONGO_SSL || false,
      authSource: "admin",
    },
  };
  //...(!isEmpty(name) ? { name } : {}),