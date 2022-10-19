const core = require('@actions/core')
const github = require('@actions/github')
import { Octokit, App } from 'octokit'
const { createActionAuth } = require('@octokit/auth-action')
// or: import { createActionAuth } from "@octokit/auth-action";

async function run() {
  try {
    const token = core.getInput('token')
    const title = core.getInput('title')
    const body = core.getInput('body')
    const assignees = core.getInput('assignees')

    // const ocktokit = new github.getOctokit(token)

    // const response = ocktokit.issues.create({
    //   ...github.context.repo,
    //   title,
    //   body,
    //   assignees: assignees ? assignees.split('\n') : undefined
    // })

    const auth = createActionAuth()
    const authentication = await auth()

    const octokit = new Octokit({ authStrategy: createActionAuth })
    const { data: slug } = await octokit.rest.apps.getAuthenticated()
    console.log(slug)

    const response = await octokit.rest.issues.create({
      ...github.context.repo,
      title,
      body,
      assignees: assignees ? assignees.split('\n') : undefined
    })

    core.setOutput('issue', JSON.stringify(response.data))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
