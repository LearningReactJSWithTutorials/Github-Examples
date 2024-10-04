import { Octokit, App } from "ocktokit"

const ocktokit = new Octokit({
    auth: process.env.GH_TOKEN
})

await ocktokit.request('POST /repos/{owner}/{repo}/git/refs', {
    owner: 'aprendizsw',
    repo: 'Github-Examples2',
    ref: 'refs/heads/sdksjs',
    sha: '073767ba5ac2f88abbf00afc3cd0463492369e10',
    headers: {
        'X-Github-Api-Version': '2022-11-28'
    }
})