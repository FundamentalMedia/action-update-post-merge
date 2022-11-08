const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
    const from_branch = core.getInput('from_branch');
    const target_branch = core.getInput('target_branch');
    const octokit = github.getOctokit(GITHUB_TOKEN); 
    
    const { context = {} } = github;
    
    const owner = context.repo.owner
    const repo  = context.repo.repo

    console.log("Repo info", context.repo)

    console.log("updating target branch", target_branch)
    console.log("with head branch", from_branch)
    await octokit.rest.repos.merge({
        owner,
        repo,
        base: target_branch,
        head: from_branch,
        commit_message: `Update automatically ${target_branch} branch with ${from_branch}.`
      });

}

run().catch(err => core.setFailed(err.message));