pipeline {
  agent {
    node {
      label 'nuke-api'
    }

  }
  stages {
    stage('error') {
      steps {
        sh '''#!/bin/bash

cp ./data/main.py /home/ubuntu//scripts/nuke-api-scraper/scraper.py'''
      }
    }

  }
}