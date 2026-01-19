# 2026-01-19--Claude-Code-news

## 概要

- **記事数**: 7件
- **関連タグ**: #claude-code, #update, #v2.1.12, #mcp-tool-search, #cowork, #team-plan, #thinking-mode

## ニュース一覧

| タイトル | 引用元 | 要約 |
|---------|--------|------|
| Claude Code v2.1.12リリース | [GitHub Releases](https://github.com/anthropics/claude-code/releases) | 2026年1月17日にv2.1.12をリリース。1月中旬までに複数のマイナーアップデートが継続的にリリースされ、MCP接続の改善、コンテキストウィンドウ管理、セキュリティ修正などが実施された。 |
| MCP Tool Search機能の追加 | [AIM](https://analyticsindiamag.com/ai-news-updates/claude-code-finally-fixes-the-huge-issue-with-mcps/) | MCPツール定義がコンテキストウィンドウの10%以上を消費する場合、自動的にツール検索機能が有効化。トークン消費を最大85%削減し、51Kトークンから8.5Kトークンに削減する事例も報告されている。 |
| Claude Cowork発表 | [Simon Willison](https://simonwillison.net/2026/Jan/12/claude-cowork/) | 2026年1月12日、Anthropicは「Claude Code for the rest of your work」と称される汎用エージェント「Claude Cowork」を発表。macOS版のClaude Desktopアプリで、Pro/Maxプラン加入者向けにリサーチプレビューとして提供開始。 |
| Team/Enterpriseプランでの提供開始 | [DevOps.com](https://devops.com/enterprise-ai-development-gets-a-major-upgrade-claude-code-now-bundled-with-team-and-enterprise-plans/) | Claude CodeがTeamプラン（月額$30/$25）とEnterpriseプランに正式に含まれるようになった。統合された課金、エンタープライズ管理機能、使用状況分析が提供される。 |
| 思考モードとプランモードの強化 | [ClaudeLog](https://claudelog.com/faqs/how-to-toggle-thinking-in-claude-code/) | 拡張思考モード（Extended Thinking）がデフォルトで有効化され、Tabキーで切り替え可能に。プランモードはShift+Tabで起動でき、読み取り専用でコードベースを分析して実装計画を立てる。 |
| プラグインマーケットプレイスの成長 | [Composio](https://composio.dev/blog/claude-code-plugin) | 公式マーケットプレイス（claude-plugins-official）に加え、コミュニティマーケットプレイスが活発化。Flow-NextやRalphなどの高度なワークフロープラグインが登場し、DevOps自動化から完全な開発スタックまで提供。 |
| コミュニティでの使用制限論議 | [The Register](https://www.theregister.com/2026/01/05/claude_devs_usage_limits/) | 2026年1月初旬、Redditなどでトークン使用制限が約60%削減されたとの報告が相次ぐ。一方で、「vibe coding」や「Action AI」としてClaude Codeを高く評価する声も強まっており、2026年のトレンドツールとして注目を集めている。 |

---

## 詳細レポート

### Claude Code v2.1.12リリース

> **引用元**
> https://github.com/anthropics/claude-code/releases

#### 概要

2026年1月中旬、Claude Codeは継続的なアップデートを実施し、v2.1.12（1月17日）までに複数の機能追加とバグ修正を行いました。特にMCP接続の改善、コンテキストウィンドウ管理の最適化、セキュリティ脆弱性の修正に重点が置かれています。

#### 詳細

**v2.1.12とv2.1.11の修正（1月17日）**

v2.1.12ではメッセージレンダリングバグが修正されました。v2.1.11では、HTTP/SSEトランスポート用のMCP接続リクエストが過剰に実行される問題が解決されました。

**v2.1.9の主要機能（1月16日）**

- `auto:N`構文により、MCPツール検索の自動有効化閾値をカスタマイズ可能になりました（Nは0-100のパーセンテージ）
- `plansDirectory`設定でプランファイルの保存場所をカスタマイズできるようになりました
- AskUserQuestionの「その他」入力フィールドでCtrl+Gを使って外部エディタを起動可能になりました
- `PreToolUse`フックで`additionalContext`を返せるようになり、ツール実行前に追加のコンテキストを注入できます
- スキルが`${CLAUDE_SESSION_ID}`文字列置換で現在のセッションIDにアクセスできるようになりました

**v2.1.7の改善（1月14日）**

- `showTurnDuration`設定でターン時間の表示/非表示を切り替え可能
- パーミッションプロンプト受諾時にフィードバックを提供できるようになりました
- タスク通知でエージェントの最終応答がインライン表示されるようになりました
- `/config`コマンドに検索機能が追加され、設定項目を素早く見つけられるようになりました

**セキュリティとパフォーマンスの改善**

v2.1.7では、ワイルドカード権限ルールのセキュリティ脆弱性が修正されました。v2.1.9では、並列ツール呼び出しでの長時間セッション失敗の問題が解決されました。また、Kittyキーボードプロトコル対応ターミナル（Ghostty、iTerm2など）でのCtrl+Zサスペンド機能も修正されました。

#### 主なポイント

1. 2週間で12回のマイナーアップデートがリリースされ、継続的な改善が実施されている
2. MCPツール管理とコンテキストウィンドウ最適化に注力
3. ユーザー体験向上のための細かな改善が多数実施されている

---

### MCP Tool Search機能の追加

> **引用元**
> https://analyticsindiamag.com/ai-news-updates/claude-code-finally-fixes-the-huge-issue-with-mcps/

#### 概要

2026年1月、AnthropicはClaude CodeにMCP Tool Search機能を追加しました。これは、GitHubで最も要望の多かった機能の一つで、MCPツールの遅延ロード（lazy loading）を実現します。

#### 詳細

**背景となる問題**

多数のMCPサーバーを設定している場合、ツール定義だけでコンテキストウィンドウの大部分を消費してしまう問題がありました。例えば、7つ以上のサーバーを設定すると、実際の作業を開始する前に67K以上のトークンを消費していました。

**仕組み**

Claude Codeは、MCPツール定義がコンテキストウィンドウの10%以上を消費する場合、自動的にTool Search機能を有効にします。有効化されると：

- MCPツールは事前にロードされず、遅延ロードされます
- Claudeは必要に応じて検索ツールを使用して関連するMCPツールを発見します
- 実際に必要なツールのみがコンテキストにロードされます

**パフォーマンス改善**

従来のアプローチでは、50以上のMCPツールで約77Kトークンを作業開始前に消費していましたが、Tool Searchを使用すると約8.7Kトークンに削減され、コンテキストウィンドウの95%を保持できます。これは85%のトークンオーバーヘッド削減を意味します。

内部テストでは、大規模なツールライブラリでの精度が大幅に向上しました：
- Opus 4: 49% → 74%に改善
- Opus 4.5: 79.5% → 88.1%に改善

**設定**

デフォルトで`auto`モードで動作し、MCPツール定義がコンテキスト閾値を超えた場合にのみ有効化されます。ツールが少ない場合は、通常通りロードされ、ツール検索は使用されません。

この機能には、ツール参照ブロック（tool_reference blocks）をサポートするモデルが必要です：Sonnet 4以降、またはOpus 4以降。Haikuモデルではサポートされていません。

#### 主なポイント

1. コンテキストウィンドウの消費を最大85%削減
2. 大規模MCPツールライブラリでの精度が大幅に向上
3. GitHubで最も要望の多かった機能の一つを実現

---

### Claude Cowork発表

> **引用元**
> https://simonwillison.net/2026/Jan/12/claude-cowork/

#### 概要

2026年1月12日、Anthropicは「Claude Code for the rest of your work」と称される汎用AIエージェント「Claude Cowork」をリサーチプレビューとして発表しました。macOS版のClaude DesktopアプリでPro/Maxプラン加入者向けに提供されています。

#### 詳細

**機能概要**

Claude Coworkは、ユーザーのコンピューター上のファイルを操作、読み取り、分析し、新しいファイルを作成できる汎用目的のAIエージェントです。ユーザーは選択したフォルダへのアクセスをClaudeに許可し、Claudeはそのフォルダ内でファイルの読み取り、編集、作成が可能になります。

タスクを設定すると、Claudeは計画を立て、着実に完了させながら、進捗状況をユーザーに報告します。これは、プログラマー向けのClaude Codeの機能を、非技術者向けに拡張したツールとして設計されています。

**主な機能**

- フォルダベースのアクセス制御
- ファイルの読み取り、編集、作成
- 自動的な計画立案と実行
- 進捗状況のリアルタイム報告

**利用可能性と価格**

2026年1月16日時点で、月額$20のClaude ProプランとMaxプランの加入者がmacOS版Claude Desktopアプリを通じて利用できます。

**開発背景**

Anthropicは、Claude Cowork自体をClaude Codeを使用して約1週間半で構築したと報告されています。これは、Claude Codeの生産性の高さを示す好例となっています。

**セキュリティに関する注意**

ブラウザAIと同様に、プロンプトインジェクション攻撃のリスクがあります。攻撃者がインターネット上で遭遇する可能性のあるコンテンツを通じて、Claudeの計画を変更しようとする試みです。Anthropicはプロンプトインジェクションに対する高度な防御機能を構築していますが、完全ではないことも明記されています。

#### 主なポイント

1. プログラミング以外の汎用作業にもClaude Codeの技術を拡張
2. 約1週間半でClaude Code自体を使って開発された
3. Pro/Maxプラン加入者向けにリサーチプレビューとして提供

---

### Team/Enterpriseプランでの提供開始

> **引用元**
> https://devops.com/enterprise-ai-development-gets-a-major-upgrade-claude-code-now-bundled-with-team-and-enterprise-plans/

#### 概要

Claude CodeがTeamプランとEnterpriseプランに正式に含まれるようになりました。これは、ビジネス顧客から最も要望の多かった機能の一つでした。

#### 詳細

**統合のメリット**

- **一元化された購読**: 個別のサブスクリプションを経費精算し、調達承認を待つ必要がなくなりました
- **統合された課金**: 一つのサブスクリプションで、統一された課金とエンタープライズ管理機能が提供されます
- **プレミアムシートの利便性**: ユーザーはClaudeとClaude Codeの両方にアクセスでき、開発ライフサイクル全体でClaudeとパートナーシップを組めます

**Claude Codeの機能**

Claude Codeは、ターミナルから直接Claudeモデルにアクセスできるコマンドラインツールで、透明性とコントロールを維持しながら、複雑なコーディングタスクを委任できます。

**価格体系**

**Teamプラン:**
- 月次請求: $30/月
- 年次請求: $25/月
- 最低ユーザー数: 5名
- Claude Codeを使用してコンセプトから完成まで、ターミナルから直接コーディングタスクを委任可能

**Enterpriseプラン:**
- カスタム価格（営業に問い合わせ）
- 拡張コンテキストウィンドウ: Claude Sonnet 4.5使用時、チャットで500Kトークン、Claude Codeで1Mトークン
- 数百件の営業記録、数十件の100ページ以上のドキュメント、10万行のコードをアップロード可能

**管理機能**

TeamプランとEnterpriseプランの両方で、以下の管理機能が提供されます：

- 詳細な支出上限設定
- セルフサービス型のシート管理
- Claude Code使用状況分析

さらに、Enterpriseプランでは、新しいCompliance APIを通じて、Claude使用データと顧客コンテンツへのリアルタイムプログラマティックアクセスが提供され、規制要件をより適切に満たすことができます。

#### 主なポイント

1. ビジネス顧客から最も要望の多かった機能を実現
2. 統合された課金とエンタープライズ管理機能を提供
3. Enterpriseプランでは1Mトークンのコンテキストウィンドウを利用可能

---

### 思考モードとプランモードの強化

> **引用元**
> https://claudelog.com/faqs/how-to-toggle-thinking-in-claude-code/

#### 概要

Claude Codeの思考モード（Extended Thinking）とプランモード（Plan Mode）が強化され、より使いやすくなりました。思考モードはデフォルトで有効化され、Tabキーで簡単に切り替えられるようになりました。

#### 詳細

**拡張思考モード（Extended Thinking）**

拡張思考モードはデフォルトで有効化され、出力トークン予算の一部（最大31,999トークン）を、Claudeが複雑な問題をステップバイステップで推論するために予約します。

この機能は、以下の場合に特に有効です：
- 複雑なアーキテクチャ上の意思決定
- 困難なバグの解決
- 複数ステップの実装計画
- 異なるアプローチ間のトレードオフ評価

Claude Code v2.0.0から、Tabキーを押すだけで会話中に拡張思考モードのオン/オフを切り替えられるようになりました。

**プランモード（Plan Mode）**

プランモードは、コード変更を行う前に、読み取り専用の操作でコードベースを分析し、計画を作成するようClaudeに指示します。Shift+Tabを2回押すだけでプランモードに入ることができます。

プランモードの特徴：
- コードベースの探索に最適
- 複雑な変更の計画に有効
- 安全にコードをレビュー可能（読み取り専用）
- AskUserQuestionツールを使用して要件を収集し、目標を明確化

プランモードでは、Claudeはコードを変更せず、実装案を提案する前に、ユーザーの要件を理解することに集中します。

**2026年の価格とアクセス**

拡張思考モードは有料プランでのみ利用可能です。この機能により、Claude 4.5は複数ステップのロジックを「推論」してから応答できます。

2026年には、$100と$200のMaxプランの両方で、自律的なプログラミングとリポジトリ管理のために設計されたターミナルベースのエージェント、Claude Codeへのフルアクセスが含まれています。

#### 主なポイント

1. Tabキーで思考モードを簡単に切り替え可能
2. プランモードはShift+Tab 2回で起動
3. 複雑な問題解決と実装計画に最適化

---

### プラグインマーケットプレイスの成長

> **引用元**
> https://composio.dev/blog/claude-code-plugin

#### 概要

Claude Codeのプラグインエコシステムが急成長しており、公式マーケットプレイスに加えて、コミュニティマーケットプレイスが活発化しています。DevOps自動化から完全な開発スタックまで、さまざまなプラグインが提供されています。

#### 詳細

**マーケットプレイスの概要**

公式Anthropicマーケットプレイス（claude-plugins-official）はClaude Code起動時に自動的に利用可能になります。`/plugin`コマンドを実行し、Discoverタブを選択することで、利用可能なプラグインを閲覧できます。

**マーケットプレイスの種類**

**公式Anthropicマーケットプレイス:**
Anthropicが管理する公式マーケットプレイスには、Language Server Protocol (LSP)を使用してClaudeがコードベースをより深く理解するのを助けるコードインテリジェンスプラグインが含まれています。

**コミュニティマーケットプレイス:**
Gordon MickelやAnand Tyagiなどの開発者によるコミュニティ駆動のマーケットプレイスが登場しています。DevOps自動化から完全な開発スタックまで、あらゆるものを提供するコミュニティマーケットプレイスでエコシステムが爆発的に成長しています。

**注目のプラグイン**

**Flow-Next**: プランファースト（plan-first）ワークフローを提供し、実装前に計画を立てることを重視します。

**Ralph**: 自律モードで、夜間にコーディングを行い、新しいコンテキストで作業を継続できます。

**RepoPrompt/Codex**: マルチモデルレビューゲートを提供し、複数のモデルでコードレビューを実施できます。

これらのプラグインは、ドリフト防止のための再アンカリング機能や、レシートベースのゲーティングなど、高度なワークフロー管理機能を提供しています。

**インストールオプション**

マーケットプレイスは以下の方法で追加できます：
- GitHubリポジトリ（owner/repo形式）
- 任意のGitリポジトリからのGit URL
- ローカルパス
- ホストされたmarketplace.jsonファイルへのリモートURL

プラグインシステムにより、開発者はワークフロー設定をパッケージ化して共有でき、チームが開発セットアップを標準化しやすくなります。

#### 主なポイント

1. 公式とコミュニティの両方のマーケットプレイスが急成長
2. Flow-NextやRalphなどの高度なワークフロープラグインが登場
3. チームでのワークフロー標準化が容易に

---

### コミュニティでの使用制限論議

> **引用元**
> https://www.theregister.com/2026/01/05/claude_devs_usage_limits/

#### 概要

2026年1月初旬、RedditなどのコミュニティでClaude Codeのトークン使用制限に関する議論が活発化しています。一方で、「vibe coding」や「Action AI」としてClaude Codeを高く評価する声も強まっており、2026年のトレンドツールとして注目を集めています。

#### 詳細

**使用制限に関する報告**

Redditの投稿では、「Claudeの使用量消費が突然不合理になった」という声が上がっており、ホリデーシーズンの使用ボーナス終了後、トークン使用制限が約60%削減されたとの主張があります。

ユーザーは「Claude Pro/Maxサブスクライバーが非常に制限的な使用制限を経験している」と報告し、「Sonnetを使用して一貫して10-15分以内に使用制限に達する」と述べています。

**コミュニティの対応**

コミュニティでは、以下のような対策が議論されています：

- `/context`コマンドでMCPツールのオーバーヘッドを監視し、未使用のツールを削除
- skill.mdを500行以下に保ち、指示を別ファイルに分割してフックと組み合わせる
- より具体的な指示を提供して、Claude Codeの成功率を向上させ、やり直しを減らす

**肯定的な評価とトレンド**

一方で、2025年12月末から2026年1月初旬にかけて、開発者はClaude Codeを「vibe coding」、エージェントの構成、大規模な生産性向上のゲームチェンジャーとして称賛する声も高まっています。

**2026年のトレンド:**

- 開発者はClaude CodeをメインのAIツールとして注目しており、代替ツールへの関心はソーシャルメディア上で10分の1程度
- Anthropicのエンジニアは、Swarming機能（オーケストレーション化されたマルチエージェント実行）が2026年に大きく注目されることを確認
- Claude Codeは「Chat AI」から「Action AI」への移行を表しており、ボットが実際にコンピューター上で作業を行う

**コミュニティの議論トピック**

コミュニティでは、プロンプト戦略、サブスクリプションの価値、プロフェッショナルワークフロー、使用制限の最適化に関するトラブルシューティングなどが活発に議論されています。

#### 主なポイント

1. トークン使用制限の削減に関する報告が相次ぐ
2. コミュニティで対策と最適化手法が活発に議論されている
3. 「vibe coding」や「Action AI」として高く評価され、2026年のトレンドツールに

---

## 今週のTips

### MCP Tool Searchの閾値をカスタマイズして最適化

Claude CodeのMCP Tool Search機能は、デフォルトでMCPツール定義がコンテキストウィンドウの10%以上を消費する場合に自動的に有効化されます。しかし、v2.1.9から`auto:N`構文を使用して、この閾値をカスタマイズできるようになりました。

**設定方法**

settings.jsonで`mcpServers`の設定に`auto:N`（Nは0-100のパーセンテージ）を指定します。例えば：

```json
{
  "mcpServers": {
    "toolSearch": "auto:5"
  }
}
```

この設定では、MCPツール定義がコンテキストウィンドウの5%以上を消費する場合にTool Searchが有効化されます。

**最適化のポイント**

- **多数のMCPサーバーを使用している場合**: 閾値を低く設定（例: `auto:5`）して、より積極的にTool Searchを利用
- **少数のMCPサーバーのみ使用**: デフォルトの`auto`（10%）で十分
- **コンテキストウィンドウを最大限活用したい場合**: 閾値を5%以下に設定して、ツール定義のオーバーヘッドを最小化

**確認方法**

`/context`コマンドを実行して、現在のコンテキスト使用状況を確認できます。MCPツール定義がどれだけのトークンを消費しているかを把握し、適切な閾値を設定しましょう。

**メリット**

- コンテキストウィンドウの使用量を最大85%削減
- より多くのコードや会話履歴をコンテキストに保持可能
- 大規模なMCPツールライブラリでの精度向上

この機能を活用することで、Claude Codeの使用制限問題を軽減し、より効率的な開発ワークフローを実現できます。

---

## Sources

- [Releases · anthropics/claude-code](https://github.com/anthropics/claude-code/releases)
- [Claude Code Finally Fixes the Huge Issue With MCPs | AIM](https://analyticsindiamag.com/ai-news-updates/claude-code-finally-fixes-the-huge-issue-with-mcps/)
- [Claude Code Just Cut MCP Context Bloat by 46.9% — 51K Tokens Down to 8.5K With Tool Search | Medium](https://medium.com/@joe.njenga/claude-code-just-cut-mcp-context-bloat-by-46-9-51k-tokens-down-to-8-5k-with-new-tool-search-ddf9e905f734)
- [What is MCP Tool Search? The Claude Code Feature | Cyrus](https://www.atcyrus.com/stories/mcp-tool-search-claude-code-context-pollution-guide)
- [First impressions of Claude Cowork, Anthropic's general agent](https://simonwillison.net/2026/Jan/12/claude-cowork/)
- [Anthropic launches Cowork, a file-managing AI agent | Fortune](https://fortune.com/2026/01/13/anthropic-claude-cowork-ai-agent-file-managing-threaten-startups/)
- [Introducing Cowork | Claude](https://claude.com/blog/cowork-research-preview)
- [Enterprise AI Development Gets a Major Upgrade: Claude Code Now Bundled with Team and Enterprise Plans - DevOps.com](https://devops.com/enterprise-ai-development-gets-a-major-upgrade-claude-code-now-bundled-with-team-and-enterprise-plans/)
- [Using Claude Code with your Team or Enterprise plan | Claude Help Center](https://support.claude.com/en/articles/11845131-using-claude-code-with-your-team-or-enterprise-plan)
- [Claude Code and new admin controls for business plans](https://www.anthropic.com/news/claude-code-on-team-and-enterprise)
- [How to Toggle Thinking in Claude Code | ClaudeLog](https://claudelog.com/faqs/how-to-toggle-thinking-in-claude-code/)
- [Mastering Claude Code Plan Mode: The Game-Changing Feature Every Engineer Needs](https://agiinprogress.substack.com/p/mastering-claude-code-plan-mode-the)
- [Common workflows - Claude Code Docs](https://code.claude.com/docs/en/common-workflows)
- [Improving your coding workflow with Claude Code Plugins - Composio](https://composio.dev/blog/claude-code-plugin)
- [Discover and install prebuilt plugins through marketplaces - Claude Code Docs](https://code.claude.com/docs/en/discover-plugins)
- [GitHub - anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)
- [Claude devs complain about surprise usage limits • The Register](https://www.theregister.com/2026/01/05/claude_devs_usage_limits/)
- [Claude Code Tips and "Wild" 2026 Predictions](https://aicodingdaily.substack.com/p/claude-code-tips-and-wild-2026-predictions)
- [20+ Most Important Claude Code CLI Tricks. 2025/2026](https://mlearning.substack.com/p/20-most-important-claude-code-tricks-2025-2026-cli-january-update)
- [Claude Code 2.1.0 arrives with smoother workflows and smarter agents | VentureBeat](https://venturebeat.com/orchestration/claude-code-2-1-0-arrives-with-smoother-workflows-and-smarter-agents)
- [Anthropic - Claude Code Release Notes - January 2026 Latest Updates - Releasebot](https://releasebot.io/updates/anthropic/claude-code)
