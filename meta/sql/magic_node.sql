SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `id` bigint NOT NULL COMMENT '主键',
  `parentId` bigint NOT NULL DEFAULT 0 COMMENT '父级id',
  `permissionCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '权限编号',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '菜单名称',
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '菜单路径',
  `category` tinyint NULL DEFAULT NULL COMMENT '菜单类型',
  `sort` int NULL DEFAULT NULL COMMENT '排序',
  `isOpen` tinyint NULL DEFAULT 0 COMMENT '是否打开新窗口',
  `deleted` tinyint NULL DEFAULT 0 COMMENT '0未删除 1已删除',
  `createdBy` bigint NULL DEFAULT NULL COMMENT '创建人',
  `updatedBy` bigint NULL DEFAULT NULL COMMENT '更新人',
  `createdAt` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (744690820434624512, 0, 'system', '系统管理', '/system', 1, 0, 0, 0, 743789983910854656, 743789983910854656, '2022-10-24 19:27:43', '2022-10-24 19:36:11');
INSERT INTO `sys_menu` VALUES (744713751759945728, 0, 'system:menu', '系统管理', '/system/menu', 1, 0, 0, 0, 743789983910854656, 743789983910854656, '2022-10-24 20:13:17', '2022-10-24 20:31:59');

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` bigint NOT NULL COMMENT '主键',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '密码',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '昵称',
  `status` tinyint NULL DEFAULT NULL COMMENT '状态',
  `avator` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '头像',
  `departmentId` bigint NULL DEFAULT NULL COMMENT '组织机构ID',
  `enabled` tinyint NULL DEFAULT 1 COMMENT '0禁用 1启用',
  `deleted` tinyint NULL DEFAULT 0 COMMENT '0未删除 1已删除',
  `createdBy` bigint NULL DEFAULT NULL COMMENT '创建人',
  `updatedBy` bigint NULL DEFAULT NULL COMMENT '更新人',
  `createdAt` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (743789983910854656, 'admin', '{bcrypt}$2a$10$oHBVL/XShW5xppO8DJSTh.xkN5xpFxSutnhlnFCvg0n3MtBKp7Z.q', NULL, NULL, NULL, NULL, 1, 0, NULL, NULL, '2022-10-23 13:37:55', NULL);
INSERT INTO `sys_user` VALUES (743832263124320256, 'admin', '{bcrypt}$2a$10$ynsuwOMzw5J8DA/1uRdBSuBg56DsP4E/BlSPHuhoWw7N3Jbob.WO.', NULL, NULL, NULL, NULL, 1, 0, NULL, NULL, '2022-10-23 15:01:55', NULL);
INSERT INTO `sys_user` VALUES (743833568718880768, 'admin', '{bcrypt}$2a$10$gAaX4qG76EOpR3KCPIpO6uw3IdUe23dvDB5WIQghWHULKU.xaxYOm', NULL, NULL, NULL, NULL, 1, 0, NULL, NULL, '2022-10-23 15:04:31', NULL);
INSERT INTO `sys_user` VALUES (743833933606551552, 'admin', '{bcrypt}$2a$10$z3NC4rSfFDaz8d7W9SWzXu34nkWjmVZIzgmpImM3I2Az/TRT3Gw62', NULL, NULL, NULL, NULL, 1, 0, NULL, NULL, '2022-10-23 15:05:14', NULL);
INSERT INTO `sys_user` VALUES (743834774665166848, 'admin', '{bcrypt}$2a$10$6CAKCeisekv6DYOD9OhAQ.2.JwfufesJHXN5ZGBzWjgHwkXQ4xf9u', NULL, NULL, NULL, NULL, 1, 0, NULL, NULL, '2022-10-23 15:06:55', NULL);
INSERT INTO `sys_user` VALUES (743836473853214720, 'admin', '{bcrypt}$2a$10$ix3GgAolhI3PhASzOkwuEeUfydcVJc80OY7NGjxHpE748Jq0z9UDC', NULL, NULL, NULL, NULL, 1, 0, NULL, NULL, '2022-10-23 15:10:17', NULL);
INSERT INTO `sys_user` VALUES (743837083906342912, 'admin', '{bcrypt}$2a$10$e7.NQcbDLOm27i/IVo2c4OR.boAvenE/SvEUjzC7alAHIfqjW1EBS', NULL, NULL, NULL, NULL, 1, 0, NULL, NULL, '2022-10-23 15:11:30', NULL);
INSERT INTO `sys_user` VALUES (743837195743264768, 'admin', '{bcrypt}$2a$10$d79uZf3HFNOhjA4oQC9Cme1YF1Vle90L4DvKtKRkIMWjS2WrUxt2G', NULL, NULL, NULL, NULL, 1, 0, NULL, NULL, '2022-10-23 15:11:43', NULL);

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test`  (
  `id` bigint NOT NULL COMMENT '主键',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES (743159957750284288, '11111');
INSERT INTO `test` VALUES (743161128380530688, '11111');
INSERT INTO `test` VALUES (743161356743606272, '11111');
INSERT INTO `test` VALUES (743161387848564736, '11111');

SET FOREIGN_KEY_CHECKS = 1;
