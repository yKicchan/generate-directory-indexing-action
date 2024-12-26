Lang: [🇺🇸](./README.md) [🇯🇵](./README.ja.md)

[![license](https://img.shields.io/github/license/yKicchan/generate-directory-indexing-action)](https://github.com/yKicchan/generate-directory-indexing-action/blob/main/LICENSE)

# Generate Directory Indexing Action

この Action は指定のディレクトリ下を探索できる `index.html` を生成します。  
GitHub Pages などで公開する静的なページのブラウジングに便利です。

## 使い方

最も簡単な使い方はこの Action を呼び出し、ディレクトリを指定することです。

```yml
- name: Generate Directory Indexing
  uses: yKicchan/generate-directory-indexing-action@v1
  with:
    target: dist
```

### 特定のファイルを除外する

`ignore` オプションを利用することで、特定のパターンにマッチするファイルを除外することができます。

```yml
- name: Generate Directory Indexing
  uses: yKicchan/generate-directory-indexing-action@v1
  with:
    target: dist
    ignore: "**/*.map"
```

複数のパターンを指定したい場合は、カンマ区切りで指定します。

```yml
- name: Generate Directory Indexing
  uses: yKicchan/generate-directory-indexing-action@v1
  with:
    target: dist
    ignore: "**/*.map, **/secret"
```

### 見た目をカスタマイズする

追加の CSS を読み込ませて、出力する `index.html` の見た目をカスタマイズすることができます。

```yml
- name: Generate Directory Indexing
  uses: yKicchan/generate-directory-indexing-action@v1
  with:
    target: dist
    # target ディレクトリからの相対パスを指定します
    theme: "./custom.css"
```

## オプション

カスタマイズが可能なオプションを用意しています。  
詳細な仕様は [action.yml](./action.yml) を確認してください。

| キーワード | 型 | 必須 | デフォルト値 | 説明 |
| --- | --- | --- | --- | --- |
| target | string | yes | - | 探索可能にしたいターゲットディレクトリ |
| ignore | string | no | - | 探索から排除したい glob パターン、カンマ区切りで複数指定が可能 |
| showHiddenFiles | boolean | no | false | 隠しファイルを表示するかどうか |
| theme | string | no | - | 生成される `index.html` を 拡張する CSS スタイル<br>`target` ディレクトリからの相対パスで指定する |
| override | boolean | no | false | すでに `index.html` が存在する時に上書きするかどうか |
