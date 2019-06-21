pipeline {
    agent {
        docker {
            image 'node:10-alpine'
            args '-p 3001:3001'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
            
            	sh 'rm -rf node_modules'
	    	sh 'npm cache clean'
		sh 'npm install'
                sh 'npm rebuild node-sass'
                sh 'npm start'
            }
        }
       
    }
    
}
