pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3333:3333'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
	stage('Deliver') { 
            steps {
		sh 'export $MONGO_IP=192.168.1.191'
		sh 'export $MONGO_PORT=32768'
                sh 'chmod +x ./jenkins/scripts/deliver.sh ./jenkins/scripts/kill.sh'
                sh './jenkins/scripts/deliver.sh' 
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
            }
        }
    }
}
