# action-update-post-merge

```bash
name: Sync multiple branches
on:
  push:
    branches:
      - main/staging
jobs:
  sync-branch:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master

      - name: Merge main/staging -> main/beta
        uses: FundamentalMedia/action-update-post-merge@v1.1
        with:
          from_branch: main/staging
          target_branch: main/beta
          github_token: ${{ github.token }}

```