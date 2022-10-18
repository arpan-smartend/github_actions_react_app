import core from '@actions/core'
import github from '@actions/github'

try {
  const name = core.getInput('who-to-greet')

  console.log(`Hello ${name}`)

  const time = new Date()
  //secd arg shoulkd be a obj
  core.setOutput('time', time.toTimeString())

  console.log(JSON.stringify(github, null, '\t'))
} catch (error) {
  core.setFailed(error.message)
}
