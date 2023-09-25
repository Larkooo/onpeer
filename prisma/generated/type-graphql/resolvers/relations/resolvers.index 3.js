"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRelationsResolver = exports.UserRelationsResolver = exports.LikeRelationsResolver = exports.CommentRelationsResolver = void 0;
var CommentRelationsResolver_1 = require("./Comment/CommentRelationsResolver");
Object.defineProperty(exports, "CommentRelationsResolver", { enumerable: true, get: function () { return CommentRelationsResolver_1.CommentRelationsResolver; } });
var LikeRelationsResolver_1 = require("./Like/LikeRelationsResolver");
Object.defineProperty(exports, "LikeRelationsResolver", { enumerable: true, get: function () { return LikeRelationsResolver_1.LikeRelationsResolver; } });
var UserRelationsResolver_1 = require("./User/UserRelationsResolver");
Object.defineProperty(exports, "UserRelationsResolver", { enumerable: true, get: function () { return UserRelationsResolver_1.UserRelationsResolver; } });
var VideoRelationsResolver_1 = require("./Video/VideoRelationsResolver");
Object.defineProperty(exports, "VideoRelationsResolver", { enumerable: true, get: function () { return VideoRelationsResolver_1.VideoRelationsResolver; } });
