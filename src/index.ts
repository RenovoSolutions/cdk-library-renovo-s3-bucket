import { aws_s3 as s3, RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface RenovoS3BucketProps {
  /**
   * Rules that define how Amazon S3 manages objects during their lifetime.
   */
  readonly lifecycleRules: s3.LifecycleRule[];
  /**
   * The name of the bucket.
   */
  readonly name?: string;
}

export class RenovoS3Bucket extends Construct {

  public readonly bucket: s3.Bucket;

  constructor(scope: Construct, id: string, props: RenovoS3BucketProps) {
    super(scope, id);

    this.bucket = new s3.Bucket(this, 'bucket', {
      bucketName: props.name,
      // data retention
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_PREFERRED,
      removalPolicy: RemovalPolicy.RETAIN,
      versioned: true,
      lifecycleRules: props.lifecycleRules,
      // security
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });
  }
}
