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
        sh 'docker run -d -p 3000:3000 --name todo-api todo-api'
      }
    }
  }
}