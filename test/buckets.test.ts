import { SynthUtils } from '@aws-cdk/assert';
import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';
import { RenovoS3Bucket } from '../src/index';

test('Snapshot', () => {
  const app = new cdk.App();
  const stack = new cdk.Stack(app, 'TestStack', {
    env: {
      account: '123456789012', // not a real account
      region: 'us-east-1',
    },
  });

  new RenovoS3Bucket(stack, 'bucket', {
    lifecycleRules: [{
      enabled: true,
      abortIncompleteMultipartUploadAfter: cdk.Duration.days(1),
      transitions: [{
        storageClass: s3.StorageClass.INTELLIGENT_TIERING,
        transitionAfter: cdk.Duration.days(30),
      }],
    }],
  });

  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
