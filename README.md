# Unbucket

Simple node module to delete all items in an S3 bucket and the bucket.

## Usage

```
const Unbucket = require('unbucket');

Unbucket(params, done);

```

### Parameters

- `params` Object with the following properties:
    - `Bucket`
    - `secretAccessKey`
    - `accessKeyId`
- `done` error first callback yields `boolean`
