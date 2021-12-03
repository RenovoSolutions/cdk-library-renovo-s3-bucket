# API Reference <a name="API Reference"></a>

## Constructs <a name="Constructs"></a>

### RenovoS3Bucket <a name="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket"></a>

#### Initializers <a name="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.Initializer"></a>

```typescript
import { RenovoS3Bucket } from '@renovosolutions/cdk-library-renovo-s3-bucket'

new RenovoS3Bucket(scope: Construct, id: string, props: RenovoS3BucketProps)
```

##### `scope`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.parameter.scope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.parameter.id"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.parameter.props"></a>

- *Type:* [`@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3BucketProps`](#@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3BucketProps)

---



#### Properties <a name="Properties"></a>

##### `bucket`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* [`aws-cdk-lib.aws_s3.Bucket`](#aws-cdk-lib.aws_s3.Bucket)

---


## Structs <a name="Structs"></a>

### RenovoS3BucketProps <a name="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3BucketProps"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RenovoS3BucketProps } from '@renovosolutions/cdk-library-renovo-s3-bucket'

const renovoS3BucketProps: RenovoS3BucketProps = { ... }
```

##### `lifecycleRules`<sup>Required</sup> <a name="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3BucketProps.property.lifecycleRules"></a>

```typescript
public readonly lifecycleRules: LifecycleRule[];
```

- *Type:* [`aws-cdk-lib.aws_s3.LifecycleRule`](#aws-cdk-lib.aws_s3.LifecycleRule)[]

Rules that define how Amazon S3 manages objects during their lifetime.

---

##### `name`<sup>Optional</sup> <a name="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3BucketProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

The name of the bucket.

---



