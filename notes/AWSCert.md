# AWS Certified Developer Associate Exam

- [freeCodeCamp video prep]()

## Elastic Beanstalk (EB)

- It is the Heroku of AWS. It is a fancy CloudFormation template.
- Web vs. Worker environment: the worker creates a bit more things.
- Web env types: single instance (one IP, lower cost, does not scale) and load balanced.
- Deployment policies: all at once, rolling, rolling with additional batch, immutable.
  1, All at once: new version deployed to all instances, but out of service while deploying. Fastest but most dangerous.
  2. Rolling: new version deployed in batches. Slower, difficult to roll back changes.
  3. Rolling with additional batch: we launch a new instance which will replace a batch (deploy + destroy previous). Good method because our capacity is never reduced. Rollbacks are painful also.
  4. Immutable: new ASG with EC2 instances, deploy. This is the safest way. Existing instances remain, so we can roll back or destroy them. Best method.

### In Place vs. Blue/Green deployment

- We can talk about it in the context of EB env, or in the context of the scope of the server.
- The exam will refer to the EB.
- Blue/Green is used mostly when we have a separate DB and we want to mantain it. The in-place (immutable) deploy destroys the env, so if the database was inside, it would be destroyed as well.

### Configuring RDS

- The RDS DB can either be inside or outside of your env. Inside is usually for development, because when the env is terminated, the DB is terminated as well.
-
