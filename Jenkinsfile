pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                bat "npm install"
                bat "npm test"
                bat "npm i cypress"
                bat "npm run e2e:edge"
                bat "npm run flow"
            }
        }
    }
}