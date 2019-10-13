module.exports = {
  apps: [
    {
      name: "btcu_PM2",
      script: "/root/btcu/server/bin/www",
      env: {
        NODE_ENV: "production",
        DATABASE_URL: "postgres://root:buaa@localhost:5432/test",
        JWT_SECRET: "password",
        PORT: 8001
      }
      // instances: 2,
      // exec_mode: "cluster"
    }
  ]
};
