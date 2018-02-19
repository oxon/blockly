pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        ws(dir: 'workspace-blockly') {
          git(url: 'https://github.com/oxon/blockly/', branch: 'master', credentialsId: 'oxocard-deploy')
        }
        
      }
    }
  }
}