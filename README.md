# learning-Node.js

## Node.jsのインストール

Node.jsのインストールには[nvm](Node Version Manager)を使用します。

[nvm]: https://github.com/nvm-sh/nvm

### バージョンマネージャnvmのインストール

その時点のnvmの最新版を[nvm]のサイトで調べます。v.40.1の場合、以下のコマンドを実行します。

```fish
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

バージョンを確認します。

```fish
nvm --version
0.40.1
```

### nvmによるNode.jsのインストール

- 最新のActive LTSバージョンをインストール

```fish
nvm install --lts
```

- 最新バージョンをインストール

```fish
nvm install node
```

- インストール可能なバージョンの一覧を表示する

```fish
nvm ls-remote
```

- バージョンを指定してインストール

```fish
nvm install 22.7.0
```

- 使うバージョンを指定する

```fish
nvm use 22.7.0
```

- インストール済みのバージョンの一覧を表示する

```fish
nvm use 22.7.0
```

- インストール済みのバージョンを削除する

```fish
nvm uninstall 22.7.0
```

## package.jsonの設定

## eslintの設定

## テスト環境の構築

### ユニットテストツールの分類

- フレームワーク

テストコードの基本構造の記述、テストの設定、実行

- アサーション

それぞれのテストの中で、結果として得られた値が期待した値と一致するかどうかを検証する。

- テストダブル

テスト対象のコードが依存するモジュールやコンポーネントを任意の別のものに置き換える。

- カバレッジ

テスト対象のコード全体のうち、テストコードによってカバーされている部分の割合を解析する。
