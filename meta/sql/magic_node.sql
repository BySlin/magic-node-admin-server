/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : localhost:3306
 Source Schema         : magic_node

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 29/10/2022 02:36:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_dept`;
CREATE TABLE `sys_dept`  (
  `id` bigint NOT NULL COMMENT '主键',
  `tenantId` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '000000' COMMENT '租户ID',
  `parentId` bigint NULL DEFAULT 0 COMMENT '父主键',
  `ancestors` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '祖级列表',
  `deptCategory` int NULL DEFAULT NULL COMMENT '部门类型',
  `deptName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '部门名',
  `fullName` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '部门全称',
  `sort` int NULL DEFAULT 0 COMMENT '排序',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  `deleted` tinyint NULL DEFAULT 0 COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '机构表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_dept
-- ----------------------------
INSERT INTO `sys_dept` VALUES (1123598813738675201, '000000', 0, '0', 1, 'MagicNodeTeam', 'MagicNodeTeam', 1, NULL, 0);
INSERT INTO `sys_dept` VALUES (1123598813738675202, '000000', 1123598813738675201, '0,1123598813738675201', 1, 'Team1', 'Team1', 1, NULL, 0);
INSERT INTO `sys_dept` VALUES (1123598813738675203, '000000', 1123598813738675201, '0,1123598813738675201', 1, 'Team2', 'Team2', 1, NULL, 0);

-- ----------------------------
-- Table structure for sys_dict
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict`;
CREATE TABLE `sys_dict`  (
  `id` bigint NOT NULL COMMENT '主键',
  `parentId` bigint NOT NULL DEFAULT 0 COMMENT '父主键',
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '描述',
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '字典码',
  `dictKey` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '字典值',
  `dictValue` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '字典名称',
  `sort` int NULL DEFAULT 0 COMMENT '排序',
  `sealed` tinyint NULL DEFAULT 0 COMMENT '0未封存1封存',
  `deleted` tinyint NULL DEFAULT 0 COMMENT '0未删除 1已删除',
  `createdBy` bigint NULL DEFAULT NULL COMMENT '创建人',
  `updatedBy` bigint NULL DEFAULT NULL COMMENT '更新人',
  `createdAt` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_dict
-- ----------------------------
INSERT INTO `sys_dict` VALUES (746263254132588544, 0, NULL, 'sex', '-1', '性别', 0, 0, 0, 743789983910854656, 743789983910854656, '2022-10-26 23:31:52', '2022-10-27 16:09:49');
INSERT INTO `sys_dict` VALUES (746263519673974784, 746263254132588544, NULL, 'sex', '1', '男', 0, 0, 0, 743789983910854656, NULL, '2022-10-26 23:32:23', NULL);
INSERT INTO `sys_dict` VALUES (746263621796888576, 746263254132588544, NULL, 'sex', '2', '女', 0, 0, 0, 743789983910854656, 743789983910854656, '2022-10-26 23:32:36', '2022-10-26 23:43:00');
INSERT INTO `sys_dict` VALUES (746796519335657472, 746263254132588544, '', 'sex', '3', '未知', 1, 0, 0, 743789983910854656, NULL, '2022-10-27 17:11:22', NULL);
INSERT INTO `sys_dict` VALUES (746889715126370304, 0, '', 'org_category', '-1', '机构类型', 1, 0, 0, 743789983910854656, NULL, '2022-10-27 20:16:32', NULL);
INSERT INTO `sys_dict` VALUES (746944839144177664, 746889715126370304, '', 'org_category', '1', '公司', 1, 0, 0, 743789983910854656, NULL, '2022-10-27 22:06:03', NULL);
INSERT INTO `sys_dict` VALUES (746944943683010560, 746889715126370304, '', 'org_category', '2', '部门', 2, 0, 0, 743789983910854656, 743789983910854656, '2022-10-27 22:06:16', '2022-10-27 22:06:35');
INSERT INTO `sys_dict` VALUES (746945054311972864, 746889715126370304, '', 'org_category', '3', '小组', 3, 0, 0, 743789983910854656, NULL, '2022-10-27 22:06:29', NULL);

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `id` bigint NOT NULL COMMENT '主键',
  `parentId` bigint NOT NULL DEFAULT 0 COMMENT '父级id',
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '权限编号',
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
INSERT INTO `sys_menu` VALUES (744690820434624512, 0, 'system', '系统管理', '/system', 1, 0, 0, 0, 743789983910854656, 743789983910854656, '2022-10-24 19:27:43', '2022-10-24 22:17:08');
INSERT INTO `sys_menu` VALUES (744713751759945728, 744690820434624512, 'system:menu', '菜单管理', '/system/menu', 1, 0, 0, 0, 743789983910854656, 743789983910854656, '2022-10-24 20:13:17', '2022-10-24 22:06:53');
INSERT INTO `sys_menu` VALUES (744756041593389056, 744690820434624512, 'system:role', '角色管理', '/system/role', 1, 1, 0, 0, 743789983910854656, 743789983910854656, '2022-10-24 21:37:18', '2022-10-24 22:06:51');
INSERT INTO `sys_menu` VALUES (744758062442610688, 744713751759945728, 'system:menu:add', '新增', NULL, 2, 1, 0, 0, 743789983910854656, 743789983910854656, '2022-10-24 21:41:19', '2022-10-24 22:10:28');
INSERT INTO `sys_menu` VALUES (744790194753896448, 744713751759945728, 'system:menu:update', '修改', NULL, 2, 1, 0, 1, 743789983910854656, 743789983910854656, '2022-10-24 22:45:09', '2022-10-24 22:45:17');

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `id` bigint NOT NULL COMMENT '主键',
  `tenantId` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '000000' COMMENT '租户ID',
  `parentId` bigint NULL DEFAULT 0 COMMENT '父主键',
  `roleName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色名',
  `sort` int NULL DEFAULT 0 COMMENT '排序',
  `roleAlias` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色别名',
  `deleted` int NULL DEFAULT 0 COMMENT '是否已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1123598816738675201, '000000', 0, '超级管理员', 1, 'administrator', 0);
INSERT INTO `sys_role` VALUES (1123598816738675202, '000000', 0, '用户', 2, 'user', 0);
INSERT INTO `sys_role` VALUES (1123598816738675203, '000000', 1123598816738675202, '人事', 1, 'hr', 0);
INSERT INTO `sys_role` VALUES (1123598816738675204, '000000', 1123598816738675202, '经理', 2, 'manager', 0);
INSERT INTO `sys_role` VALUES (1123598816738675205, '000000', 1123598816738675202, '老板', 3, 'boss', 0);

-- ----------------------------
-- Table structure for sys_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_menu`;
CREATE TABLE `sys_role_menu`  (
  `id` bigint NOT NULL COMMENT '主键',
  `menuId` bigint NOT NULL COMMENT '菜单id',
  `roleId` bigint NOT NULL COMMENT '角色id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '角色菜单关联表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_role_menu
-- ----------------------------

-- ----------------------------
-- Table structure for sys_tenant
-- ----------------------------
DROP TABLE IF EXISTS `sys_tenant`;
CREATE TABLE `sys_tenant`  (
  `id` bigint NOT NULL COMMENT '主键',
  `tenantId` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '000000' COMMENT '租户ID',
  `tenantName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '租户名称',
  `enabled` tinyint NULL DEFAULT 1 COMMENT '是否启用',
  `deleted` tinyint NULL DEFAULT 0 COMMENT '是否已删除',
  `createdBy` bigint NULL DEFAULT NULL COMMENT '创建人',
  `updatedBy` bigint NULL DEFAULT NULL COMMENT '更新人',
  `createdAt` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '租户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_tenant
-- ----------------------------
INSERT INTO `sys_tenant` VALUES (746871487847202816, '123456', '测试', 1, 0, 743789983910854656, NULL, '2022-10-27 19:40:19', NULL);
INSERT INTO `sys_tenant` VALUES (746878914181201920, '111111', '111111', 1, 0, 743789983910854656, 743789983910854656, '2022-10-27 19:55:04', '2022-10-27 19:55:11');
INSERT INTO `sys_tenant` VALUES (1123598820738675201, '000000', '管理组', 1, 0, 743789983910854656, NULL, '2022-10-26 19:40:54', NULL);

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
  `tenantId` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '000000' COMMENT '租户ID',
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
INSERT INTO `sys_user` VALUES (743789983910854656, 'admin', '{bcrypt}$2a$10$oHBVL/XShW5xppO8DJSTh.xkN5xpFxSutnhlnFCvg0n3MtBKp7Z.q', NULL, NULL, NULL, NULL, '000000', 1, 0, NULL, NULL, '2022-10-23 13:37:55', NULL);

SET FOREIGN_KEY_CHECKS = 1;
