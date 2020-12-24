# AWS Certified Solutions Architect Associate Exam

## EC2
- It is a computer in the cloud = instance.
- We can choose from different images (Linux, Mac, etc.)
- IaaS
- We can SSH into it.

## S3
- There are no folders, it's just an illusion, a UX trick. S3 bucket structure is totally flat.
- The region is decided when a bucket is created.
- S3 bucket names have to be globally unique.
- 100 buckets soft limit, can be expanded talking to support.

## CloudFormation (CFN)
- Infrastructure As Code. We can determine a collection of resources with a template file.
- This template can have parameters.
- When we deploy that template, the collection of deployed resources will be called a stack.
- Used to automate provisioning of resources.
