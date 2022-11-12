pipeline {
    agent any
    environment {
        PROJECT = "edulabs-lo-webapp"
        USER = "ec2-user"
        AWS_ACCOUNT = sh(script: 'aws sts get-caller-identity --query Account --output text', , returnStdout: true).trim()
        AWS_REGION = sh(script: 'aws configure get region', , returnStdout: true).trim()
        REPO = "${AWS_ACCOUNT}.dkr.ecr.${AWS_REGION}.amazonaws.com/${PROJECT}"
        ECR_LOGIN = "aws ecr get-login --no-include-email --region $AWS_REGION"
        MS_DOMAIN = "liveolympiad.org"
    }

    stages{
        stage('Avatar setup') {
            when { anyOf {
                expression { env.GIT_BRANCH == env.BRANCH_THREE }
            } }
            steps {
                sh 'sed "s/4040/4001/g" nginx.conf > tmp'
                sh 'mv tmp nginx.conf'
            }
        }
        stage('Build') {
            when { anyOf {
                expression { env.GIT_BRANCH == env.BRANCH_ONE }
                expression { env.GIT_BRANCH == env.BRANCH_TWO }
                expression { env.GIT_BRANCH == env.BRANCH_THREE }
            } }
            steps {
		sh 'mv src/environments/environment.$GIT_BRANCH.ts src/environments/environment.ts'
                sh "docker build -t ${PROJECT}:${GIT_BRANCH} ."
            }
        }
        stage('Push to ECR') {
            when { anyOf {
                expression { env.GIT_BRANCH == env.BRANCH_ONE }
                expression { env.GIT_BRANCH == env.BRANCH_TWO }
                expression { env.GIT_BRANCH == env.BRANCH_THREE }
            } }
            steps {
                sh 'docker tag ${PROJECT}:${GIT_BRANCH} ${REPO}:${GIT_BRANCH}'
                sh '$($ECR_LOGIN)'
                sh "docker push ${REPO}:${GIT_BRANCH}"
            }
        }
        stage('Pull & Run') {
            when { anyOf {
                expression { env.GIT_BRANCH == env.BRANCH_ONE }
                expression { env.GIT_BRANCH == env.BRANCH_TWO }
                expression { env.GIT_BRANCH == env.BRANCH_THREE }
            } }
            steps {
                sh 'echo \$(${ECR_LOGIN}) > ${GIT_BRANCH}.sh'
                sh 'echo docker pull $REPO:$GIT_BRANCH >> ${GIT_BRANCH}.sh'
                sh 'echo docker rm -f $PROJECT >> ${GIT_BRANCH}.sh'
                sh 'echo docker run -e TZ=Asia/Kolkata --net=host -d --name $PROJECT-$GIT_BRANCH $REPO:$GIT_BRANCH >> ${GIT_BRANCH}.sh'
                sh 'cat ${GIT_BRANCH}.sh'
                sh 'cat ${GIT_BRANCH}.sh | ssh ${USER}@${GIT_BRANCH}.$MS_DOMAIN' 
            }
        }
    }
}
