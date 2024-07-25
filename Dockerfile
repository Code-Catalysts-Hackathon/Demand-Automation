steps:
- name: 'node:14'
  entrypoint: 'bash'
  args:
  - '-c'
  - |
    npm install
    npm run build
- name: 'gcr.io/cloud-builders/docker'
  args:
  - 'build'
  - '-t'
  - 'gcr.io/$PROJECT_ID/$REPO_NAME:$COMMIT_SHA'
  - '.'
images:
- 'gcr.io/$PROJECT_ID/$REPO_NAME:$COMMIT_SHA'

options:
  logging: NONE
