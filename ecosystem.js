module.exports = {
  apps: [
    {
      name: "btcu_PM2",
      script: "./server/bin/www",
      env_production: {
        NODE_ENV: "production"
      },
      instances: 2,
      exec_mode: "cluster"
    }
  ]
};
