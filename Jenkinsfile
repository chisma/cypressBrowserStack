pipeline {
    agent any

    agent {
        docker {
            image 'cypress/browsers:node12.8.1-chrome78-ff70'         

        }
    }
    stages{
        stage('Run the Cypress UI Integration tests'){
            steps {
                sh 'npm run install'
                sh 'npm run cypress:install'
                sh 'npm run cypress:run:chrome'
                sh 'npm run cypress:run:firefox'
            }
        } 
    }
    post {
        failure {
            archiveArtifacts artifacts: 'cypress/videos/*.mp4'
        }
    }
}