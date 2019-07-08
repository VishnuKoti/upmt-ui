pipeline {
    agent {
        docker {
            image 'node:10-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
            
            	sh 'rm -rf node_modules'
	    	sh 'npm cache clean --force'
		sh 'npm install'
                sh 'npm rebuild node-sass'
               
            }
        }
        stage('Test') {  
	              steps {
	    		       sh 'npm run test'
	    	        }
	}
	 stage('Run') {  
		              steps {
		    		       sh 'npm start'
		    	        }
	}
    }
    
            
    
}
