# learning-Node.js

## Node.jsのインストール

Node.jsのインストールには[nvm](Node Version Manager)を使用します。

[nvm]: https://github.com/nvm-sh/nvm

### nvmのインストール

その時点のnvmの最新版がv.40.1の場合、以下のコマンドを実行します。

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

バージョンを確認する。

```bash
nvm --version
0.40.1
```

### nvmによるNode.jsのインストール

- 最新バージョンをインストール

```
nvm install node
```

- 最新のActive LTSバージョンをインストール

```
nvm install --lts
```

- バージョンを指定してインストール

```
nvm install 22.7.0
```

## テスト環境の構築
