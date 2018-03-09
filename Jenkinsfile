pipeline {
  agent any
  triggers {
    cron('H 0 * * *')
  }
  stages {
    stage('build') {
      steps {
        ws(dir: 'workspace-blockly') {
          dir(path: 'closure-library') {
            git(url: 'https://github.com/google/closure-library', branch: 'master', poll: true)
          }
          
          dir(path: 'blockly') {
            git(url: 'https://github.com/oxon/blockly/', branch: 'master', credentialsId: 'oxon-deploy', poll: true)
            sh 'python build.py core generators langfiles'
          }
          
        }
        
      }
    }
    stage('archive') {
      steps {
        ws(dir: 'workspace-blockly') {
          archiveArtifacts 'blockly/msg/js/**/*.js,blockly/blockly_compressed.js,blockly/blocks_compressed.js,blockly/arduino_compressed.js'
        }
      }
    }
  }
}
