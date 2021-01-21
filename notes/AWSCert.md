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
- The building blocks are parameters, resources and outputs. In the template (in JSON or YAML), we can use CFN functions. For example, `!Ref` or `!GetAtt`. [Click here](https://github.com/acantril/aws-sa-associate-saac02/tree/master/04-AWS-Fundamentals/03_simple_automation_with_cfn ) for an example of a simple EC2 template.

## CloudWatch (CW)
- Metrics + Logs + Events
- Namespaces collect metrics
- In some cases, we can enable `Detailed monitoring` of a resource. This costs money.
