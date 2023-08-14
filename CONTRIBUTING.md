# Contribution Guide

当リポジトリへのコントリビューションについてのガイドラインおよびコーディング規約です。

*現在当リポジトリは開発初期段階にあります。ガイドラインは適宜変更されることに留意してください。*

## ディレクトリ構成

```txt
.
├── apps
│   ├── catalog
│   └── website
│       └── src
│           ├── app
│           ├── component
│           ├── constant
│           ├── context
│           └── util
└── packages
    ├── core
    │   ├── asset
    │   ├── component
    │   ├── font
    │   └── icon
    ├── design-token
    ├── eslint
    │   ├── eslint-config-usa-base
    │   ├── eslint-config-usa-esm
    │   ├── eslint-config-usa-nextjs
    │   ├── eslint-config-usa-node
    │   └── eslint-config-usa-react
    ├── jest
    ├── postcss
    ├── prettier
    ├── stylelint
    ├── tailwind
    ├── tsconfig
    └── type
```

| モジュール              | 責務                                                       |
| ----------------------- | ---------------------------------------------------------- |
| `apps/catalog`          | リポジトリ全体の Storybook を横断的に参照する              |
| `apps/website`          | Web アプリケーションを提供する                             |
| `packages/core`         | リポジトリのコア機能を提供する                             |
| `packages/design-token` | デザインシステムの最小粒度であるデザイントークンを提供する |
| `packages/eslint`       | ESLint の設定を提供する                                    |
| `packages/jest`         | Jest の設定を提供する                                      |
| `packages/postcss`      | PostCSS の設定を提供する                                   |
| `packages/prettier`     | Prettier の設定を提供する                                  |
| `packages/stylelint`    | Stylelint の設定を提供する                                 |
| `packages/tailwind`     | Tailwind CSS の設定を提供する                              |
| `packages/tsconfig`     | tsconfig の設定を提供する                                  |
| `packages/type`         | TypeScript の型定義を提供する                              |

## モジュール間の参照

モジュール間の参照は基本的に各モジュールのパッケージ名 `@usa/*` で行います。

```tsx
// apps/website/src/app/page.tsx
import { Button } from '@usa/core/component';
```

ただし、子モジュールが自身のモジュールに対するパスエイリアスを使用する場合、ポリレポに一般的な `@/*` ではなく `#*/*` を使用してください。

```tsx
// packages/core/component/button/button.presenter.tsx
import { CheckIcon } from '#core/icon/check-icon';
```

また、`packages/` 配下のモジュール間での参照は循環参照が発生しない限り許可されますが、`apps/` 配下のモジュール間での参照は循環参照の有無にかかわらず許可されません。
