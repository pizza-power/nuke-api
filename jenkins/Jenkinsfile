pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3333:3333' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
