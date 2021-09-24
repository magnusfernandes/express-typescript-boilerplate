module.exports = {
  apps: [{
    name: "shramik-api",
    script: "build/server.js",
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: "1G",
    env: {
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production",
      DB_CONN_STRING: "postgres://quantifys:zzzpqow1029@localhost:5432/shramik_production"
    }
  }],

  deploy: {
    production: {
      user: "deploy",
      host: "205.147.101.185",
      ref: "origin/master",
      repo: "git@gitlab.quantifys.com:shramik/shramik-api.git",
      path: "/home/deploy/apps/shramik-api",
      "post-deploy": "npm install && pm2 reload ecosystem.config.js --env production"
    }
  }
};