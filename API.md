# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RenovoS3Bucket <a name="RenovoS3Bucket" id="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket"></a>

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.Initializer"></a>

```typescript
import { RenovoS3Bucket } from '@renovosolutions/cdk-library-renovo-s3-bucket'

new RenovoS3Bucket(scope: Construct, id: string, props: RenovoS3BucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3BucketProps">RenovoS3BucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3BucketProps">RenovoS3BucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.isConstruct"></a>

```typescript
import { RenovoS3Bucket } from '@renovosolutions/cdk-library-renovo-s3-bucket'

RenovoS3Bucket.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3Bucket.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---


## Structs <a name="Structs" id="Structs"></a>

### RenovoS3BucketProps <a name="RenovoS3BucketProps" id="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3BucketProps"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3BucketProps.Initializer"></a>

```typescript
import { RenovoS3BucketProps } from '@renovosolutions/cdk-library-renovo-s3-bucket'

const renovoS3BucketProps: RenovoS3BucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3BucketProps.property.lifecycleRules">lifecycleRules</a></code> | <code>aws-cdk-lib.aws_s3.LifecycleRule[]</code> | Rules that define how Amazon S3 manages objects during their lifetime. |
| <code><a href="#@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3BucketProps.property.name">name</a></code> | <code>string</code> | The name of the bucket. |

---

##### `lifecycleRules`<sup>Required</sup> <a name="lifecycleRules" id="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3BucketProps.property.lifecycleRules"></a>

```typescript
public readonly lifecycleRules: LifecycleRule[];
```

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule[]

Rules that define how Amazon S3 manages objects during their lifetime.

---

##### `name`<sup>Optional</sup> <a name="name" id="@renovosolutions/cdk-library-renovo-s3-bucket.RenovoS3BucketProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the bucket.

---



