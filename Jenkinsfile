pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
               // install dependencies
                sh "npm install"
            }
            steps {
               // run tests
                sh "npm test"
            }
        }
    }
}