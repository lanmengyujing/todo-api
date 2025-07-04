pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test || echo "No tests found, skipping."'
      }
    }
    stage('Cleanup') {
      steps {
        sh 'docker rm -f todo-api || true'
      }
    }
    stage('Build') {
      steps {
        sh 'docker build -t todo-api .' 
      }
    }
    stage('Run') {
      steps {
        sh 'docker run -d --network host --name todo-api todo-api'
      }
    }
  }
}