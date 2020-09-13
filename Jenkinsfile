pipeline {
  agent {
    node {
      label 'nodejs'
    }

  }
  stages {
    stage('install & build') {
      agent any
      steps {
        sh 'cd frontend/'
        sh 'npm install --dev'
        sh 'npm run build'
      }
    }

  }
}