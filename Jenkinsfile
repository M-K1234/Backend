pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                bat "npm install"
                bat "npm test"
            }
        }
    }
}