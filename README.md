# React-TypeScript-Bootstrap(SCSS)-WebPack Starter Kit

## 使い方

以下のコマンドでビルドが開始され、開発サーバーが起動します。

```
> npm start
```

既定のブラウザが自動起動するはずですが、もし起動しない場合は以下の URL にアクセスします。

`http://localhost:8080`

## 開発について

Visual Studio Code を使用する想定をしています。

Visual Studio Code に以下の拡張機能を追加してください。

- EditorConfig for VS Code
- ESLint
- Prettier - Code formatter

## 本番向けビルド

`npm start` で生成される JavaScript/CSS はデバッグ情報を含みます。

本番環境向けには以下のコマンドでビルドしてください。

```
> npm run build
```

`public/assets` フォルダに JavaScript/CSS が生成されます。
