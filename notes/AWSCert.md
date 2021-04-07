# AWS Certified Solutions Architect Associate Exam

## EC2
- It is a computer in the cloud = instance.
- We can choose from different images (Linux, Mac, etc.)
- IaaS
- We can SSH into it.



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
- There's a list of delegations, designated by IANA.
- Client -> resolver -> DNS root servers.

## Route 53
- Used to register domains & host zones.
- Namesevers are used to point at our domains, can be external (not AWS).

### DNS Record Types
- NS: nameservers.
- A and AAAA: matches IPv4 and IPv6.
- CNAME: host to host references. Can only point to names, not IP addresses.
- MX: priority + value. Lower priority goes first. Find a mail server for a domain.
- TXT: additional info, to prove domain ownership for example.
- TTL: always lower it to avoid caching and DNS issues.

## IAM Policies
- A policy grants or denies access to AWS services.
- Defined in a JSON that always contains version + statements.
- It will determine a resource, and the actions.
- If 2 policies overlap, the rule is:
  - Explicit DENY
  - Explicit ALLOW
  - Default DENY (implicit)
- "If they are not allowed, default DENY".
- Policies are evaluated together.
- Two types: 
  1. Inline: a JSON for every user (not good practice). For special occasions.
  2. Managed: created and attach when needed, for common things. Can be either AWS or Custom.
- The statements are structured in: action, resource and effect. To reference the resource we will use the ARN naming. It looks like `s3:::mybucket/*` (this means all objects inside mybucket).  

## IAM Users
- An IAM User is an identity used for long term AWS access.
- Principal can use username/password or access keys to be an IAM user.   
- An IAM user is an "authenticated identity".
- Authentication != authorization.
- Limit of 5000 IAM users/account.

### IAM Groups
- An IAM user can be a member of 10 groups max.
- IAM groups are containers for users. We cannot login to a group. A user can be a member of various groups.
- There is not a default "all users" group.
- No nesting allowed.
- 300 groups limit.
- We cannot reference groups from resource policies, but we can add/remove managed policies to groups.

## IAM Roles
- A role is like a hat we put on, we borrow permissions and "assume a role" temporarily. Contrarily, an IAM user is to match a single principal.
- A role has a trust policy (who can assume the role) and a permissions policy.
### When to use roles?
- For example, Lambdas assume a role to access other resources.
- When a service needs to do something, use a role.
- Emergency situations.
- Remember the 5000 IAM user limit. Some big org couldn't use it to match all the users to IAM users, so they do something called ID federation. This means that using an external account, we match it to an IAM role to make use of services. This is good because:
  1. There are no AWS credentials on the app.
  2. Uses an existing login that the user knows.
  3. Scales infinetely.

## AWS Organizations
- Needs a management/master account used to create the organization.
- We have an organization root, and then organizational units (OUs).
- It has consolidated billing.
- We can create accounts inside the organization.
### Common practice
- Three accounts: general, prod and dev. General will be the management account.
- We create an admin role in the prod account which we will use to switch accounts.
- With this admin role, we can even create accounts inside the org.
- This account-switching role, `OrganizationAccountAccess` will have an `AdminAccess` policy attached to it. So every time we switch, we assume this role. This role will trust our general account. That's why every time we are logged in to general, we can switch to prod/dev: we will assume this role and switch.

## Service Control Policies
- It is an AWS Organizations tool.
- Can be attached to the root of the org, OUs or accounts.
- They cascade.
- They are account permission boundaries, limiting what an account can do.
- 2 ways: ALLOW list and DENY list (default). The default acces is `FullAWSAccess`.
- SCPs controls what is allowed and what isn't, but identity policies in accounts grant or deny services. They overlap.


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

## S3
- There are no folders, it's just an illusion, a UX trick. S3 bucket structure is totally flat.
- The region is decided when a bucket is created.
- S3 bucket names have to be globally unique.
- 100 buckets soft limit, can be expanded talking to support.
- `Block all public access` is built as a failsafe. Even if we uncheck it, we still have to explicitly set allow/deny policies.
- Pricing:
  - Per GB stored
  - Per data-transfer OUT, never IN.

### S3 Security
- S3 is private by default.
- We use bucket policies (resource policies) to control access. We can allow/deny different accounts and anonymous principals.
- Inside each policy statement, there will be a `Principal`. In ID policies, that's not there because the principal is "me".

### S3 ACLs
- Legacy method to control access, don't use.
- Simple permissions lists to read, write, etc.

### Static hosting
- We can enable this to access via HTTP.
- `index` and `error` documents are needed & set.
- A website endpoint is created, an address we can access.
- We can use a custom domain via R53. The bucket name matters, so be careful when setting the bucket name if you want to public host with a custom domain.
- It's commonly used for offloading and out-of-band (backup page).


