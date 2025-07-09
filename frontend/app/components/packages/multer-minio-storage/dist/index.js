"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AUTO_CONTENT_TYPE: () => AUTO_CONTENT_TYPE,
  DEFAULT_CONTENT_TYPE: () => DEFAULT_CONTENT_TYPE,
  default: () => multerMinioStorage_default
});
module.exports = __toCommonJS(src_exports);

// src/multerMinioStorage.ts
var import_crypto = __toESM(require("crypto"));
var import_file_type = __toESM(require("file-type"));
var import_is_svg = __toESM(require("is-svg"));
var import_path = __toESM(require("path"));
var import_run_parallel = __toESM(require("run-parallel"));
var import_stream = __toESM(require("stream"));
function addFileSuffix(filePath, suffix, delimeter = "-") {
  const fileExt = import_path.default.extname(filePath);
  return import_path.default.dirname(filePath) + "/" + import_path.default.basename(filePath, fileExt) + delimeter + suffix + fileExt.toLowerCase();
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
  import_crypto.default.randomBytes(16, (err, raw) => {
    cb(err, err ? void 0 : raw.toString("hex"));
  });
}
function autoContentType(req, file, cb) {
  file.stream.once("data", (firstChunk) => {
    const type = (0, import_file_type.default)(firstChunk);
    let mime;
    if (type) {
      mime = type.mime;
    } else if ((0, import_is_svg.default)(firstChunk)) {
      mime = "image/svg+xml";
    } else {
      mime = "application/octet-stream";
    }
    const outStream = new import_stream.default.PassThrough();
    outStream.write(firstChunk);
    file.stream.pipe(outStream);
    cb(null, mime, outStream);
  });
}
function collect(storage, req, file, cb) {
  (0, import_run_parallel.default)(
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
    const mainStream = file.stream.pipe(new import_stream.default.PassThrough());
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AUTO_CONTENT_TYPE,
  DEFAULT_CONTENT_TYPE
});
