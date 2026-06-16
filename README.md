# 競馬予想ツール — Keiba-Tool v0.1

期待値ベースの競馬予想分析 Web アプリケーション。

**スローガン**: 「当てるのではなく、期待値で勝つ。」

---

## 🎯 プロジェクト概要

- **目標**: ROI ≥ 110% の実績を持つ販売可能なツール
- **対象ユーザー**: 競馬予想をしたい個人
- **主機能**: 期待値計算、買い目推奨、投資額計算
- **開発期間**: 3ヶ月（12週）

---

## 📋 セットアップ

### クイックスタート（ワンクリックデプロイ）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftattun1192%2Fkeiba-tool&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY,SUPABASE_SERVICE_ROLE_KEY&envDescription=Supabase%20Environment%20Variables&project-name=keiba-tool)

上のボタンをクリックするだけで、Vercel に自動デプロイされます。

### ローカル開発（オプション）

前提条件: Node.js 18+ がインストール済み

```bash
# 1. 依存関係をインストール
npm install

# 2. 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

---

## 🗂️ プロジェクト構造

```
keiba-tool/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # ルートレイアウト
│   │   ├── page.tsx         # ホームページ
│   │   └── globals.css      # グローバルスタイル
│   └── lib/
│       └── expected_value.ts  # 期待値計算エンジン
├── package.json             # 依存関係
├── tsconfig.json            # TypeScript設定
├── tailwind.config.js       # Tailwind設定
└── next.config.js           # Next.js設定
```

---

## 🚀 開発ロードマップ

### Phase 1（Week 1-4）— MVP v0.1
- [x] Next.js プロジェクト初期化
- [x] UI フレームワーク（Tailwind）
- [x] 複勝期待値計算機
- [ ] Supabase DB 連携
- [ ] 結果保存機能

### Phase 2（Week 5-8）— v0.2
- [ ] ワイド・馬連対応
- [ ] オッズ自動取得
- [ ] 複数馬の組み合わせ計算

### Phase 3（Week 9-12）— v1.0
- [ ] ユーザー登録・認証
- [ ] 課金機能
- [ ] 実績ダッシュボード

---

## 🔧 環境変数

`.env.local` ファイルに以下を設定：

```env
NEXT_PUBLIC_SUPABASE_URL=https://gkaijbmndtxgyubjzgka.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

---

## 💻 主要なコマンド

| コマンド | 説明 |
|---|---|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 本番ビルド |
| `npm run start` | 本番サーバー起動 |
| `npm run lint` | コード検査 |

---

## 📚 技術スタック

- **フロント**: Next.js 15 + React 18 + TypeScript
- **スタイル**: Tailwind CSS
- **状態管理**: Zustand（予定）
- **バック**: Next.js API Routes
- **DB**: Supabase (Postgres)
- **認証**: Supabase Auth
- **デプロイ**: Vercel

---

## ⚖️ 法令遵守

このアプリケーションは以下を遵守します：
- 金融商品取引法（勧誘内容）
- 景表法（表示の確実性）
- JRA 利用規約（データ取得方法）
- 個人情報保護法（ユーザーデータ）

---

## 📝 ライセンス

Private（個人プロジェクト）

---

## 🤝 開発チーム

- **tech-lead**: アーキテクチャ設計
- **frontend-engineer**: UI 実装
- **backend-engineer**: API・DB 実装
- **devops-engineer**: デプロイ・監視

---

## 🐛 開発時の注意

1. `.env.local` を Git に上げない（`.gitignore` で除外）
2. Service Role Key は絶対に公開しない
3. 期待値計算の精度を最優先に

---

**Last Updated**: 2026-06-16  
**Version**: 0.1.0-alpha
