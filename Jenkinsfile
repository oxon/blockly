pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        ws(dir: 'ws') {
          git(url: 'https://github.com/oxon/blockly', branch: 'master', credentialsId: 'oxon-deploy')
        }
        
      }
    }
  }
}
