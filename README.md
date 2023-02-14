# action-update-post-merge

Just copy this in .github/workflows with the relevant branch names (from_branch, target_branch and on push:)
Don't forget to add a secret named AUTOMERGE to the repo where the this action is added. The secret must be created by an user with write access on the relevant repo.
Also MergeTeam needs to have access to the repo.

```bash
name: Automerge staging to beta and release on push

on:
  push:
    branches:
      - main/staging
jobs:
  sync-branch:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          github_token: ${{ secrets.AUTOMERGE }}

      - name: Merge main/staging -> main/beta
        if: always()
        uses: FundamentalMedia/action-update-post-merge@v1.3
        with:
          from_branch: main/staging
          target_branch: main/beta
          github_token: ${{ secrets.AUTOMERGE }}
          
      - name: Merge main/staging -> main/release
        if: always()
        uses: FundamentalMedia/action-update-post-merge@v1.3
        with:
          from_branch: main/staging
          target_branch: main/release
          github_token: ${{ secrets.AUTOMERGE }}
          
```
