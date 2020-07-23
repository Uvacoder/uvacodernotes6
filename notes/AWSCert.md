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

### Follow along

- Use commands when possible.
- CodeCommit is the GitHub of Amazon.
- We will use the EB CLI. This CLI has to be installed in the root of our env if we are using C9. `eb init`. `eb create --single`. If we don't do single, it is gonna spin up an ELB which costs money.
- If we get a warning that we don't have permissions, a solution is to create a test environment using the console (Ruby, sample app). These permissions will then be added to our IAM role.
- Modifying to **Immutable** deploy: we can do it throught the console, but to do it manually we would add a `000_deploy.config` file in the `.ebextensions` folder. Immutable deploys are slower.
- **Blue/Green:** Will have 2 envs, our old one a our new one with the changes. We need 2 envs. `eb clone`. Once the new one is ok, we can check it's working, and then we would swap the environments' URLs and remove the old one. It would be: `eb swap original --destination_name clone`. Then `eb terminate original`.
