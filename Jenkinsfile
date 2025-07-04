pipeline {
  agent any
  options {
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '10'))
    timeout(time: 30, unit: 'MINUTES')
  }
  parameters {
    string(name: 'ENV', defaultValue: 'dev', description: 'Target environment')
  }
  environment {
    DOCKER_IMAGE = "todo-api:${env.BUILD_NUMBER}"
  }
  stages {
    stage('Install Dependencies') {
      steps {
        script {
          sh 'npm install'
        }
      }
    }
    stage('Lint') {
      steps {
        script {
          sh './scripts/lint.sh'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          sh './scripts/test.sh'
        }
      }
    }
    stage('Cleanup') {
      steps {
        script {
          sh 'docker rm -f todo-api || true'
        }
      }
    }
    stage('Build') {
      steps {
        script {
          sh "docker build -t $DOCKER_IMAGE ."
        }
      }
    }
    stage('Deploy to Staging') {
      when {
        expression { params.ENV == 'staging' }
      }
      environment {
        DEPLOY_ENV = 'staging'
      }
      steps {
        script {
          sh "echo Deploying to ${params.ENV} environment"
          sh "docker run -d --network jenkins_agents_default --name todo-api $DOCKER_IMAGE"
        }
      }
    }
  }
  post {
    always {
      cleanWs()
    }
    failure {
      script {
        // Replace with your notification logic, e.g., Slack or email
        echo "Build failed for ${env.JOB_NAME}"
      }
    }
  }
}