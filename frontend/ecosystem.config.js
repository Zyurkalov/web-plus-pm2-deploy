// require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config({ path: './.env.deploy' })

const { DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPO } = process.env;
const HOST_PATH = `${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`

module.exports = {
  apps: [{
    name: "mesto",
    script: "dist/app.js"
  },
  ],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      // 'pre-deploy': `scp ./*.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
      'post-deploy': `cd frontend && pwd && npm ci && npm run build`
      // 'pre-deploy-local': "npm run build",
      // 'post-deploy':
      //   `cd frontend &&
      //   pwd &&git a
      //   scp -Cr .env ./build/* ${HOST_PATH} &&
      //   npm ci`
    },
  },
}
