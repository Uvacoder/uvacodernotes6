# AWS

- [AWS for Front-End Engineers](https://frontendmasters.com/courses/aws-frontend-react)
- [Related Course Notes](https://gist.github.com/stevekinney/6ab02582829f039b6a14c973923909f8)
- [Slides](https://speakerdeck.com/stevekinney/aws-for-frontend-engineers)
- Services:
  - [IAM](https://docs.aws.amazon.com/iam/index.html)
  - [S3](https://docs.aws.amazon.com/s3/index.html)
  - [AWS CLI](https://docs.aws.amazon.com/cli/index.html)
  - [Route 53](https://docs.aws.amazon.com/route53/index.html)
  - [CloudFront](https://docs.aws.amazon.com/cloudfront/index.html)
  - [Lambda@Edge](https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html)

## IAM and Account Management

- IAM is a tool for managing accounts and account permissions
- Never use the `root` account for anything. It is good practice to create sub-accounts with permissions for everything that we are going to do.
- Always set up billing alerts with spending limits.
- Always download the `.csv` file when prompted. The secret key is unique and we won't be able to get it again.
- Use MFA auth.
- Create an IAM user named `admin` and never use the `root` account for anything.

## S3

- Initially, to host a site in an S3 bucket, the bucket name must match the domain name.
- We need to set up each bucket's access policies. Amazon has a tool for generating those policies.

## AWS CLI

- Everything we do in the dahsboard we can do it faster with the CLI.
- At first, it is going to ask us for our secret code (from the previously downloaded `.csv` file)
- We can have multiple CLI profiles (users) on the same computer.
- We can automate a lot of things with a script once we learn the syntax.

## Route 53

- We don't need to buy the domain name from Amazon to use Route 53.
- For SPAs, we have to set the error page to `index.html` as well; because the routes in an SPA (React, Vue) are "fake" (client-side routing).
- If we do, for example, `mybucket.com`, the address `www.mybucket.com` will not work. To work around it, we have to create another S3 bucket named `www.mybucket.com` and then redirect it to our original `mybucket.com`. So this `www` bucket only redirects traffic to the original one, it will be empty. We will also need to create a record set (see docs).

## CloudFront

- CloudFront is used to spread our S3 bucket to CDNs around the world. It will also cache requests and do other optimizations that will make our site go faster.
- Conceptually: S3 bucket === CloudFront distribution
- We will create a CloudFront distribution and then redirect our R53 to this new CF distribution.
- Because CloudFront will cache requests, when we make changes to our code it is important to invalidate the cache so that the users see the changes.
- Everything we do on CF will take time, because it needs to propagate to a lot of data centers. Be patient.

## Lambda@Edge

- It is basically a service to write Lambda functions for CloudFront.
- We can do many things: redirect responses, add security headers, modify routes, etc. Check the Internet for examples.
