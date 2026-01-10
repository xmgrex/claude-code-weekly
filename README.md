# Claude Code Weekly

Claude Codeに関する最新情報を自動収集し、週次レポートを生成するワークフローです。

## 概要

- 毎週月曜 9:00 (JST) に自動実行
- Claude Codeを使用してWeb検索・情報収集
- Markdown形式の記事を自動生成
- GitHub + Notionに自動保存

## セットアップ

### 1. リポジトリの作成

```bash
cd /Users/kyouyagenki/automation-workflows/claude-code-weekly
git init
git add .
git commit -m "Initial commit"
```

### 2. GitHubにリポジトリを作成

GitHubで新規リポジトリ `claude-code-weekly` を作成し、pushします。

```bash
git remote add origin git@github.com:YOUR_USERNAME/claude-code-weekly.git
git push -u origin main
```

### 3. OAuthトークンの生成

ローカルでClaude Codeを使用してトークンを生成します。

```bash
claude setup-token
```

表示されたトークンをコピーしてください。

### 4. GitHub Secretsの設定（Claude Code）

1. リポジトリの **Settings** > **Secrets and variables** > **Actions** に移動
2. **New repository secret** をクリック
3. 以下を入力:
   - **Name**: `CLAUDE_CODE_OAUTH_TOKEN`
   - **Value**: 生成したOAuthトークン
4. **Add secret** をクリック

### 5. Notion Integrationの作成

1. [Notion Integrations](https://www.notion.so/my-integrations) にアクセス
2. **New integration** をクリック
3. 名前を入力（例: `Claude Code Weekly`）
4. **Submit** をクリック
5. 表示された **Internal Integration Secret** をコピー

### 6. Notionページの準備

1. 記事を保存したいNotionページを開く
2. 右上の **...** > **Connections** > 作成したIntegrationを追加
3. ページURLからPage IDを取得
   - URL例: `https://notion.so/My-Page-abc123def456`
   - Page ID: `abc123def456`（最後のハイフン以降の部分）

### 7. GitHub SecretsにNotion情報を追加

以下の2つのSecretを追加:

| Name | Value |
|------|-------|
| `NOTION_TOKEN` | Integration Secret |
| `NOTION_PAGE_ID` | 取得したPage ID |

### 8. 動作確認

1. **Actions** タブに移動
2. **Weekly Claude Code Research** を選択
3. **Run workflow** をクリックして手動実行

## ファイル構成

```
.
├── .github/
│   └── workflows/
│       └── weekly-research.yml   # GitHub Actionsワークフロー
├── articles/                      # 生成された記事
├── prompts/
│   └── research.md               # リサーチ用プロンプト
└── README.md
```

## カスタマイズ

### 実行スケジュールの変更

`.github/workflows/weekly-research.yml` の `cron` を編集:

```yaml
schedule:
  - cron: '0 0 * * 1'  # 毎週月曜 00:00 UTC
```

### リサーチ内容の変更

`prompts/research.md` を編集してリサーチの方向性を調整できます。

## 注意事項

- Max/Proプラン契約者のみ利用可能です
