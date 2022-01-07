# action-update-post-merge

Just copy this in .github/workflows with the relevant branch names (from_branch, target_branch and on push:)

```bash
name: Merge main
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
        if: always()
        uses: FundamentalMedia/action-update-post-merge@v1.1
        with:
          from_branch: main/staging
          target_branch: main/beta
          github_token: ${{ github.token }}

```
