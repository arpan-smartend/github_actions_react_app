const core = require('@actions/core')
const github = require('@actions/github')

try {
  core.debug('Debug message') // only if debugging is enabled
  core.warning('Warning message')
  core.error('Error message')

  const name = core.getInput('who-to-greet')
  core.setSecret(name)
  console.log(`Hello ${name}`)

  const time = new Date()
  //secd arg shoulkd be a obj
  core.setOutput('time', time.toTimeString())

  core.startGroup('Logging github object')
  console.log(JSON.stringify(github, null, '\t'))
  core.endGroup()

  core.exportVariable('HELLO', 'hello')
} catch (error) {
  core.setFailed(error.message)
}
