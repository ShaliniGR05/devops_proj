pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ShaliniGR05/devops_proj'
            }
        }

        stage('Build') {
            steps {
                sh '''
                npm ci
                npm run build
            '''
    }
}

        stage('Test') {
            steps {
                sh '''
                if [ ! -d dist ]; then
                    echo "Build failed!"
                    exit 1
                fi
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                rm -rf /var/www/html/*
                cp -r dist/* /var/www/html/
                '''
            }
        }
    }
}