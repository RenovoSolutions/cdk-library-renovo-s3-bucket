import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export interface IRenovoS3BucketProps {
  /**
   * Rules that define how Amazon S3 manages objects during their lifetime.
   */
  lifecycleRules: s3.LifecycleRule[];
  /**
   * The name of the bucket.
   */
  name?: string;
}

export class RenovoS3Bucket extends cdk.Construct {

  public readonly bucket: s3.Bucket;

  constructor(scope: cdk.Construct, id: string, props: IRenovoS3BucketProps) {
    super(scope, id);

    this.bucket = new s3.Bucket(this, 'bucket', {
      bucketName: props.name,
      // data retention
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_PREFERRED,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      versioned: true,
      lifecycleRules: props.lifecycleRules,
      // security
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });
  }
}
