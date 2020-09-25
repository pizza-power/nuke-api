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
<<<<<<< HEAD
		sh 'MONGO_IP=192.168.1.191 MONGO_PORT=32768 NODE_PORT=3333'
=======
                sh 'MONGO_IP=192.168.1.191 MONGO_PORT=32768 NODE_PORT=3333'
>>>>>>> 1dfda891ec4327f06651eacec7ba11262b082be6
            }
        }
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
