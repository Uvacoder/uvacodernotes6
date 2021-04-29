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
- We can use a custom domain via R53. The bucket name matters, so be careful when setting the bucket name if you want to public host with a custom domain. It's important to make sure we own the domain first.
- It's commonly used for offloading and out-of-band (backup page).
- We have to name the bucket `name.domain.tld`
- Uncheck `block all public access`. This doesn't mean we allow it, it's just a failsafe.
- There's a `static hosting` option we have to select.
- The objects inside must be public. This would be something like `Allow, *, s3:GetObject`.
- In R53 => Hosted Zones => Create Records. There's already a setting to directly point to S3.
- Important: Bucket name = domain.

### Versioning and MFA Delete
- Versioning: once enabled, it cannot be disabled. It can only be suspended.
- Versioning gives an `id` to objects. We can specifically request versions, if we don't, we use `CurrentVersion` by default.
- When we delete a version, we will add a _delete marker_ which will only hide the specific `id`. It does not physically delete the file.
- Space is consumed by all versions.
- Versioning can't be switched back. If we want to completely disable it, thebest option is to delete + reupload to a new bucket.
- MFA Delete: this adds an MFA to change the versioning state and to delete versions. We can also add the MFA + code with API calls to do it.

### Performance
- Three options:
  - Single PUT stream => unreliable
  - Multipart Upload:
    - Min. size 100MB
    - 10K parts of 5MB-5GB
    - These are like an array of mini-uploads, super fast
  - Accelerated Transfer:
    - Needs to be enabled
    - Enters edge locations
    - No periods in name
    - There's a tool to test if using accelerated transfer is worth it 


## Encryption
- 2 types:
  - At rest: in our machine, shared hardware
  - In transit: a tunnel between systems
- Parts of an encrypted system:
  - Plaintext: unencrypted data (not necessarily text, anything)
  - Algorithm: plaintext + key
  - Key
  - Cyphertext: encrypted data

### Keys
- Symmetric encryption: same key for encryption and decryption. This is not good for remote parties.
- Asymettric encryption: a public key (encrypt) + a private key (decrypt). Good for 2+ parties who never met before. Example: SSH.
- Signing: sign with a private key to verify identity.
- Steganography: hiding something inside of something else. Example: invisible ink.

## KMS
- KMS is a regional and public service to create, store and manage keys.
- Keys NEVER leave KMS
- FIPS 140-2 (L2)

### Customer Master Keys (CMS)
- Each CMS contains: id, date, policy, description and state.
- Backed by physical key material.
- Can be generated or imported.
- Up to 4kb of data.
- There are also DEKs
  - Data Encryption Keys
  - +4kb of data
  - Linked to CMK
  - KMS does not store it
- CMKs are isolated to a region and never leave
- AWS managed or customer managed
- Support rotation  
- Anything related to "encryption key rotation+ => KMS
- Backing key
- Aliases

#### Key policies and security
- Same like bucket policies
- Every CMK has one
- Key policy + IAM policy
- In a Key Policy, manage != use
- Encrypt/decrypt: an `.enc` file will be generated.

## S3 Encryption
- The objects are encrypted, never the buckets.
- Already encrypted in transit by default.
- At rest:
  - Client: before it leaves
  - Server: when it reaches the S3 endpoint


(missing written notes)

## EBS
- Block storage - raw disk allocations (volume).
- Can be encrypted using KMS.
- Storage is provisioned in one AZ (AZ resilient).
- Attached to one EC2.
- Can be detached and reattached to another instance.
- Billed on GB-month, and performance in some cases.
- **There are no cross-AZ attachements**, it is an AZ service.

### Volume Types
- GP2: General Purpose SSD
  - From 1GB to 16TB
  - IO Credits are used to measure our usage. We need to manage these IO credits ourselves. They "replenish" when we don't use them. 
  - For volumes bigger than 1TB, we don't use this credit system.
  - Great for boot volumes, low-latency interactive apps, dev & test.
- GP3:   



