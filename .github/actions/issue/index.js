const core = require('@actions/core')
const github = require('@actions/github')
import { Octokit, App } from 'octokit'

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

  const octokit = new Octokit({ auth: token })
  const { data: slug } = await octokit.rest.apps.getAuthenticated()
  console.log(slug)

  const response = await octokit.rest.issues.create({
    ...github.context.repo,
    assignees: assignees ? assignees.split('\n') : undefined
  })

  core.setOutput('issue', JSON.stringify(response.data))
} catch (error) {
  core.setFailed(error.message)
}
