pipeline {
  agent any
  stages {
    stage('install & build') {
      agent any
      steps {
        nodejs('nodejs') {
          sh 'npm install --dev'
          sh 'npm run build'
        }

        sh 'tar -czvf release.tar.gz dist'
        archiveArtifacts 'release.tar.gz'
      }
    }

  }
}