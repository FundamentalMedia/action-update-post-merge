# action-update-post-merge

Just copy this in .github/workflows with the relevant branch names (from_branch, target_branch and on push:)
Don't forget to add a secret named AUTOMERGE to the repo where the this action is added. The secret must be created by an user with write access on the relevant repo.

```bash
name: Automerge staging to beta on push

on:
  push:
    branches:
      - main/staging
jobs:
  sync-branch:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        with:
          token: ${{ secrets.AUTOMERGE }}

      - name: Merge main/staging -> main/beta
        uses: FundamentalMedia/action-update-post-merge@v1.2
        with:
          from_branch: main/staging
          target_branch: main/beta
          github_token: ${{ secrets.AUTOMERGE }}
```
