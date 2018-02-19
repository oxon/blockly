pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        ws(dir: 'ws') {
          dir(path: 'ws') {
            git(url: 'https://github.com/oxon/blockly', branch: 'master', credentialsId: 'oxon-deploy', poll: true)
          }
          
        }
        
      }
    }
  }
}