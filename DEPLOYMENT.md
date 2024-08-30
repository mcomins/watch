### GLOBAL ###

> Deploy Role For CodeBuild
```
aws cloudformation deploy --stack-name watch-codebuild-role \
	--template-file infrastructure/role-codebuild.yml \
	--capabilities CAPABILITY_NAMED_IAM \
	--region us-east-1 \
	--profile default
```

### STG ###

> Deploy S3 Artifacts Bucket (us-east-1)
```
aws cloudformation deploy --stack-name watch-stg-us-east-1-artifacts \
	--template-file infrastructure/s3-stg-us-east-1-artifacts.yml \
	--capabilities CAPABILITY_NAMED_IAM \
	--region us-east-1 \
	--profile default
```

> Deploy CodeBuild Project (us-east-1)
```
aws cloudformation deploy --stack-name watch-stg-us-east-1-codebuild \
	--template-file infrastructure/codebuild-stg-us-east-1.yml \
	--capabilities CAPABILITY_NAMED_IAM \
	--region us-east-1 \
	--profile default
```

### PROD ###

> Deploy S3 Artifacts Bucket (us-east-1)
```
aws cloudformation deploy --stack-name watch-prod-us-east-1-artifacts \
	--template-file infrastructure/s3-prod-us-east-1-artifacts.yml \
	--capabilities CAPABILITY_NAMED_IAM \
	--region us-east-1 \
	--profile default
```

> Deploy CodeBuild Project (us-east-1)
```
aws cloudformation deploy --stack-name watch-prod-us-east-1-codebuild \
	--template-file infrastructure/codebuild-prod-us-east-1.yml \
	--capabilities CAPABILITY_NAMED_IAM \
	--region us-east-1 \
	--profile default
```