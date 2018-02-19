pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        ws(dir: 'ws') {
          git(url: 'https://github.com/oxon/blockly', branch: 'master', credentialsId: '0b52dd09b891a23003a5c3c935e2fc78f75e0453')
        }
        
      }
    }
  }
}