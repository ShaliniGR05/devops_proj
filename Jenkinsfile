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
                set -e

                echo "testing started..."

                if [ ! -d dist ] || [ -z "$(ls -A dist)" ]; then
                    echo "dist folder missing or empty"
                    exit 1
                fi

                if [ ! -f dist/index.html ]; then
                    echo "index.html missing"
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