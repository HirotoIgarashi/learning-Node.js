# learning-Node.js

## Node.jsのインストール

Node.jsのインストールには[nvm](Node Version Manager)を使用します。

[nvm]: https://github.com/nvm-sh/nvm

### バージョンマネージャnvmのインストール

その時点のnvmの最新版をnvmのサイトで調べます。v.40.1の場合、以下のコマンドを実行します。

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

バージョンを確認します。

```bash
nvm --version
0.40.1
```

### nvmによるNode.jsのインストール

- 最新のActive LTSバージョンをインストール

```
nvm install --lts
```

- 最新バージョンをインストール

```
nvm install node
```

- インストール可能なバージョンの一覧を表示する

```
nvm ls-remote
```

- バージョンを指定してインストール

```
nvm install 22.7.0
```

- 使うバージョンを指定する

```
nvm use 22.7.0
```

- インストール済みのバージョンの一覧を表示する

```
nvm use 22.7.0
```

- インストール済みのバージョンを削除する

```
nvm uninstall 22.7.0
```

## テスト環境の構築
