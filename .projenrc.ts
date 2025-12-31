import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  projenrcTs: true,
  cdkVersion: '2.202.0',
  jsiiVersion: '^5.8.0',
  defaultReleaseBranch: 'master',
  majorVersion: 2,
  name: '@renovosolutions/cdk-library-renovo-s3-bucket',
  description: 'An AWS CDK construct library for creating S3 buckets with desirable defaults.',
  repositoryUrl: 'https://github.com/RenovoSolutions/cdk-library-renovo-s3-bucket.git',
  keywords: [
    'cdk',
    'aws-cdk',
    'aws-cdk-construct',
    'projen',
  ],
  buildWorkflow: false,
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflow: false,
    workflowOptions: {
      labels: ['auto-approve', 'deps-upgrade'],
    },
    exclude: ['projen'],
  },
  githubOptions: {
    mergify: false,
    pullRequestLintOptions: {
      semanticTitle: false,
    },
  },
  stale: false,
  releaseToNpm: true,
  release: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  docgen: true,
  eslint: true,
  publishToPypi: {
    distName: 'renovosolutions.aws-cdk-renovo-s3-bucket',
    module: 'renovosolutions_s3_bucket',
  },
  publishToNuget: {
    dotNetNamespace: 'renovosolutions',
    packageId: 'Renovo.AWSCDK.RenovoS3Bucket',
  },
});

new javascript.UpgradeDependencies(project, {
  include: ['projen'],
  taskName: 'upgrade-projen',
  workflow: false,
  workflowOptions: {
    schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 2 * * 1']),
  },
  pullRequestTitle: 'upgrade projen',
});

// Ignore the release workflow files so they're not committed to git
project.gitignore.exclude('!/.github/workflows/release.yml');
project.gitignore.addPatterns('.github/workflows/release.yml');

project.synth();
