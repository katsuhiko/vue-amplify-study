# Vue Amplify Study

## インストール

```
git clone https://github.com/katsuhiko/vue-amplify-study.git
cd vue-amplify-study
docker run --rm -it -v $(pwd)/study:/app -w /app node:10.16 npm install
docker-compose up -d
```


## 各サイトへのアクセス

- アプリ
  - http://localhost:8080

- StoryBook
  - http://localhost:6006

- vue ui
  - http://localhost:8000
```
docker exec -it cli /bin/sh
vue ui --host 0.0.0.0
```


## プロジェクト作成

- cli コンテナへ入る

```
docker-compose up -d
docker exec -it cli /bin/sh
```


- Create project 

```
vue create study

Vue CLI v3.8.4
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, PWA, Router, Vuex, Linter, Unit, E2E
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Pick a E2E testing solution: Cypress
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In package.json
? Save this as a preset for future projects? No

cd study
```


- Install vuetify

```
vue add vuetify

? Choose a preset: Default (recommended)
```


- Install storybook

```
vue add storybook

? What do you want to generate? Initial framework
```


- Install Amplify

```
npm install aws-amplify
npm install aws-amplify-vue
```


## Amplify の設定

```
docker exec -it cli /bin/sh
cd study
```

```
amplify configure

Follow these steps to set up access to your AWS account:

Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue

Specify the AWS Region
? region:  ap-northeast-1
Specify the username of the new IAM user:
? user name:  amplify-study
Complete the user creation using the AWS console
Press Enter to continue

Enter the access key of the newly created user:
? accessKeyId:  **********
? secretAccessKey:  ********************
This would update/create the AWS Profile in your local machine
? Profile Name:  default
```

```
amplify init

Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project study
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using vue
? Source Directory Path:  src
? Distribution Directory Path: dist
? Build Command:  npm run-script build
? Start Command: npm run-script serve
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify <category> add" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```

```
amplify add auth
Using service: Cognito, provided by: awscloudformation
 
 The current configured provider is Amazon Cognito. 
 
 Do you want to use the default authentication and security configuration? Manual configuration
 Select the authentication/authorization services that you want to use: User Sign-Up & Sign-In only (Best used with a cloud API only)
 Please provide a friendly name for your resource that will be used to label this category in the project: study
 Please provide a name for your user pool: study_userpool
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in when using your Cognito User Pool? Email
 Multifactor authentication (MFA) user login options: OFF
 Email based user registration/forgot password: Enabled (Requires per-user email entry at registration)
 Please specify an email verification subject: Your verification code
 Please specify an email verification message: Your verification code is {####}
 Do you want to override the default password policy for this User Pool? No
 Warning: you will not be able to edit these selections. 
 What attributes are required for signing up? (Press <space> to select, <a> to toggle all, <i> to invert selection)Email
 Specify the app's refresh token expiration period (in days): 30
 Do you want to specify the user attributes this app can read and write? No
 Do you want to use an OAuth flow? No
Successfully added resource study locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

```
amplify add api 
? Please select from one of the below mentioned services GraphQL
? Provide API name: study
? Choose an authorization type for the API Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project
? Do you have an annotated GraphQL schema? No
? Do you want a guided schema creation? Yes
? What best describes your project: Single object with fields (e.g., “Todo” with ID, name, description)
? Do you want to edit the schema now? No

GraphQL schema compiled successfully.
Edit your schema at /app/study/amplify/backend/api/study/schema.graphql or place .graphql files in a directory at /app/study/amplify/backend/api/study/schema
Successfully added resource study locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

```
amplify add hosting
? Select the environment setup: DEV (S3 only with HTTP)
? hosting bucket name study-hosting
? index doc for the website index.html
? error doc for the website error.html

You can now publish your app using the following command:
Command: amplify publish
```


## 参考

- icon一覧
  - https://material.io/tools/icons/?style=baseline


## コミット時のコメント

Angular のコメントルールを参考。

- https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type

```
feat        : 新機能
fix         : バグ修正
docs        : ドキュメントのみの変更
style       : コードの意味に影響を与えない変更（空白、フォーマット、セミコロンの欠落など）
refactor    : バグを修正も機能も追加しないコード変更
perf        : パフォーマンスを向上させるコード変更
test        : 欠けているテストや既存のテストの修正
chore       : ビルドプロセスの変更、あるいは文書生成などの補助ツールやライブラリーの変更
```

