// src/multerMinioStorage.ts
import crypto from "crypto";
import fileType from "file-type";
import isSvg from "is-svg";
import path from "path";
import parallel from "run-parallel";
import stream from "stream";
function addFileSuffix(filePath, suffix, delimeter = "-") {
  const fileExt = path.extname(filePath);
  return path.dirname(filePath) + "/" + path.basename(filePath, fileExt) + delimeter + suffix + fileExt.toLowerCase();
}
function staticValue(value) {
  return function(req, file, cb) {
    cb(null, value);
  };
}
var defaultAcl = staticValue("private");
var defaultContentType = staticValue("application/octet-stream");
var defaultMetadata = staticValue(null);
var defaultCacheControl = staticValue(null);
var defaultContentDisposition = staticValue(null);
var defaultStorageClass = staticValue("STANDARD");
var defaultSSE = staticValue(null);
var defaultSSEKMS = staticValue(null);
function defaultKey(req, file, cb) {
  crypto.randomBytes(16, (err, raw) => {
    cb(err, err ? void 0 : raw.toString("hex"));
  });
}
function autoContentType(req, file, cb) {
  file.stream.once("data", (firstChunk) => {
    const type = fileType(firstChunk);
    let mime;
    if (type) {
      mime = type.mime;
    } else if (isSvg(firstChunk)) {
      mime = "image/svg+xml";
    } else {
      mime = "application/octet-stream";
    }
    const outStream = new stream.PassThrough();
    outStream.write(firstChunk);
    file.stream.pipe(outStream);
    cb(null, mime, outStream);
  });
}
function collect(storage, req, file, cb) {
  parallel(
    [
      storage.getBucket.bind(storage, req, file),
      storage.getKey.bind(storage, req, file),
      storage.getAcl.bind(storage, req, file),
      storage.getMetadata.bind(storage, req, file),
      storage.getCacheControl.bind(storage, req, file),
      storage.getContentDisposition.bind(storage, req, file),
      storage.getStorageClass.bind(storage, req, file),
      storage.getSSE.bind(storage, req, file),
      storage.getSSEKMS.bind(storage, req, file)
    ],
    (err, values) => {
      if (err)
        return cb(err);
      storage.getContentType(
        req,
        file,
        (err2, contentType, replacementStream) => {
          if (err2)
            return cb(err2);
          cb.call(storage, null, {
            bucket: values[0],
            key: values[1],
            acl: values[2],
            metadata: values[3],
            cacheControl: values[4],
            contentDisposition: values[5],
            storageClass: values[6],
            contentType,
            replacementStream,
            serverSideEncryption: values[7],
            sseKmsKeyId: values[8]
          });
        }
      );
    }
  );
}
function MinIOStorage(opts) {
  switch (typeof opts.minioClient) {
    case "object":
      this.minioClient = opts.minioClient;
      break;
    default:
      throw new TypeError("Expected opts.minioClient to be object");
  }
  switch (typeof opts.bucket) {
    case "function":
      this.getBucket = opts.bucket;
      break;
    case "string":
      this.getBucket = staticValue(opts.bucket);
      break;
    case "undefined":
      throw new Error("bucket is required");
    default:
      throw new TypeError(
        "Expected opts.bucket to be undefined, string or function"
      );
  }
  switch (typeof opts.key) {
    case "function":
      this.getKey = opts.key;
      break;
    case "undefined":
      this.getKey = defaultKey;
      break;
    default:
      throw new TypeError("Expected opts.key to be undefined or function");
  }
  switch (typeof opts.acl) {
    case "function":
      this.getAcl = opts.acl;
      break;
    case "string":
      this.getAcl = staticValue(opts.acl);
      break;
    case "undefined":
      this.getAcl = defaultAcl;
      break;
    default:
      throw new TypeError(
        "Expected opts.acl to be undefined, string or function"
      );
  }
  switch (typeof opts.contentType) {
    case "function":
      this.getContentType = opts.contentType;
      break;
    case "undefined":
      this.getContentType = defaultContentType;
      break;
    default:
      throw new TypeError(
        "Expected opts.contentType to be undefined or function"
      );
  }
  switch (typeof opts.metadata) {
    case "function":
      this.getMetadata = opts.metadata;
      break;
    case "undefined":
      this.getMetadata = defaultMetadata;
      break;
    default:
      throw new TypeError("Expected opts.metadata to be undefined or function");
  }
  switch (typeof opts.cacheControl) {
    case "function":
      this.getCacheControl = opts.cacheControl;
      break;
    case "string":
      this.getCacheControl = staticValue(opts.cacheControl);
      break;
    case "undefined":
      this.getCacheControl = defaultCacheControl;
      break;
    default:
      throw new TypeError(
        "Expected opts.cacheControl to be undefined, string or function"
      );
  }
  switch (typeof opts.contentDisposition) {
    case "function":
      this.getContentDisposition = opts.contentDisposition;
      break;
    case "string":
      this.getContentDisposition = staticValue(opts.contentDisposition);
      break;
    case "undefined":
      this.getContentDisposition = defaultContentDisposition;
      break;
    default:
      throw new TypeError(
        "Expected opts.contentDisposition to be undefined, string or function"
      );
  }
  switch (typeof opts.storageClass) {
    case "function":
      this.getStorageClass = opts.storageClass;
      break;
    case "string":
      this.getStorageClass = staticValue(opts.storageClass);
      break;
    case "undefined":
      this.getStorageClass = defaultStorageClass;
      break;
    default:
      throw new TypeError(
        "Expected opts.storageClass to be undefined, string or function"
      );
  }
  switch (typeof opts.serverSideEncryption) {
    case "function":
      this.getSSE = opts.serverSideEncryption;
      break;
    case "string":
      this.getSSE = staticValue(opts.serverSideEncryption);
      break;
    case "undefined":
      this.getSSE = defaultSSE;
      break;
    default:
      throw new TypeError(
        "Expected opts.serverSideEncryption to be undefined, string or function"
      );
  }
  switch (typeof opts.sseKmsKeyId) {
    case "function":
      this.getSSEKMS = opts.sseKmsKeyId;
      break;
    case "string":
      this.getSSEKMS = staticValue(opts.sseKmsKeyId);
      break;
    case "undefined":
      this.getSSEKMS = defaultSSEKMS;
      break;
    default:
      throw new TypeError(
        "Expected opts.sseKmsKeyId to be undefined, string, or function"
      );
  }
}
MinIOStorage.prototype._handleFile = function(req, file, cb) {
  collect(this, req, file, function(err, opts) {
    if (err)
      return cb(err);
    const params = {
      Bucket: opts.bucket,
      Key: opts.key,
      ACL: opts.acl,
      CacheControl: opts.cacheControl,
      ContentType: opts.contentType,
      Metadata: opts.metadata,
      StorageClass: opts.storageClass,
      ServerSideEncryption: opts.serverSideEncryption,
      SSEKMSKeyId: opts.sseKmsKeyId,
      Body: opts.replacementStream || file.stream
    };
    if (opts.contentDisposition) {
      params.ContentDisposition = opts.contentDisposition;
    }
    let fileSize = 0;
    const mainStream = file.stream.pipe(new stream.PassThrough());
    mainStream.on("data", (chunk) => {
      fileSize += chunk.length;
    });
    this.minioClient.putObject(
      opts.bucket,
      opts.key,
      mainStream,
      fileSize,
      opts.metadata,
      (err2, result) => {
        if (err2)
          cb(err2);
        else {
          cb(null, {
            size: fileSize,
            bucket: opts.bucket,
            key: opts.key,
            acl: opts.acl,
            contentType: opts.contentType,
            contentDisposition: opts.contentDisposition,
            storageClass: opts.storageClass,
            serverSideEncryption: opts.serverSideEncryption,
            metadata: opts.metadata,
            location: result.location,
            etag: result.etag,
            versionId: result.versionId
          });
        }
      }
    );
  });
};
MinIOStorage.prototype._removeFile = function(req, file, cb) {
  this.minioClient.removeObject(file.bucket, file.key, cb);
  this.minioClient.removeObject(
    file.bucket,
    addFileSuffix(file.key, "thumb"),
    cb
  );
  this.minioClient.removeObject(
    file.bucket,
    addFileSuffix(file.key, "featured"),
    cb
  );
};
function multerMinioStorage_default(opts) {
  return new MinIOStorage(opts);
}
var AUTO_CONTENT_TYPE = autoContentType;
var DEFAULT_CONTENT_TYPE = defaultContentType;
export {
  AUTO_CONTENT_TYPE,
  DEFAULT_CONTENT_TYPE,
  multerMinioStorage_default as default
};
