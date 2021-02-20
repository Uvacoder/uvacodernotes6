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

## High Availability, Fault Tolerance and Disaster Recovery
- High Availability: **maximizing availability**. User disruption is OK.
- Fault Tolerance: a system that can continue operating even with faults. It tolerates the failure of its components.
- Disaster Recovery: tools to enable the recovery of vital technology. Accomplished with planning and testing.

## DNS
- DNS client -> resolver -> zone -> zonefile -> nameserver (NS).
- There are 13 DNS Root Servers, managed by 12 organizations.
- Root hints: pointers to the servers, included in a device/OS and dependant on vendor.
- Root zone: a database of TLDs (Top Level Domains). TLDs are .com, .org., for example.

## Cloudwatch Logs
- It is a public service (AWS/on-premises).
- It is a regional service which stores & monitors logs.
- We have logging sources (AWS or non-AWS) that send log events. These log events go into a log stream (log events from the same source). There are also log groups, who contain different log streams. We can set metric filters to these log groups. These metric filters will generate metrics that then can trigger alarms, notifications.

## CloudTrail
- Logs API calls/activities as a CloudTrail Event. 
- 90 days stored by default in Event History (default, free).
- Management Events vs Data Events.
- A Trail is how we customize it. Trails can be set to one region or all regions. Either way it will take into account Global Services like S3. Data Events are turned off by default. 
- Logs are stored in JSON format in an S3. We can also direct these logs to Cloudwatch Logs.
- By default we have 90 days of history that we can check, but it won't be stored in S3. We'll have to enable a Trail, which is how we can configure it.
- **It is not realtime**, there is a delay (~15 mins).