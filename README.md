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

