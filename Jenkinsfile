pipeline {
  agent {
    dockerfile {
      filename 'dockerfile'
    }

  }
  stages {
    stage('') {
      steps {
        sh '''#!/bin/bash

cp ./data/main.py /home/ubuntu//scripts/nuke-api-scraper/scraper.py'''
      }
    }

  }
}