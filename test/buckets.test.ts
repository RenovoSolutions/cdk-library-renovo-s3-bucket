import { aws_s3 as s3, App, Stack, Duration } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { RenovoS3Bucket } from '../src/index';

test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack', {
    env: {
      account: '123456789012', // not a real account
      region: 'us-east-1',
    },
  });

  new RenovoS3Bucket(stack, 'bucket', {
    lifecycleRules: [{
      enabled: true,
      abortIncompleteMultipartUploadAfter: Duration.days(1),
      transitions: [{
        storageClass: s3.StorageClass.INTELLIGENT_TIERING,
        transitionAfter: Duration.days(30),
      }],
    }],
  });

  expect(Template.fromStack(stack)).toMatchSnapshot();
});
