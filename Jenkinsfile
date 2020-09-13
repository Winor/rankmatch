pipeline {
  agent any
  stages {
    stage('install & build') {
      agent {
        node {
          label 'nodejs'
        }

      }
      steps {
        nodejs('nodejs') {
          sh 'cd frontend/'
          sh 'npm install --dev'
          sh 'npm run build'
        }

      }
    }

  }
}