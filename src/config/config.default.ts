import { MidwayConfig } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { uploadWhiteList } from '@midwayjs/upload';
import * as redisStore from 'cache-manager-ioredis';
import { tmpdir } from 'os';
import * as path from 'path';
import { join } from 'path';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1666417148756_9259',
  koa: {
    port: 7001,
  },
  jwt: {
    secret: 'P1lVKktxIjXpihjZ', // fs.readFileSync('xxxxx.key')
    expiresIn: 60 * 60 * 24, // https://github.com/vercel/ms
  },
  security: {
    csrf: {
      enable: false,
    },
  },
  cache: {
    store: redisStore,
    options: {
      host: 'localhost', // default value
      port: 6379, // default value
      password: '',
      db: 0,
      keyPrefix: 'cache:', //缓存前缀
      ttl: 60 * 60, //单位秒
    },
  },
  bull: {
    defaultQueueOptions: {
      redis: {
        port: 6379,
        host: '127.0.0.1',
        password: '',
        db: 0,
      },
      prefix: 'midway-bull', // 这些任务存储的key，都是midway-task开头，以便区分用户原有redis里面的配置。
      repeat: {
        tz: 'Asia/Shanghai', // Task等参数里面设置的比如（0 0 0 * * *）本来是为了0点执行，但是由于时区不对，所以国内用户时区设置一下。
      },
    },
  },
  cors: {
    credentials: true,
    exposeHeaders: ['Authorization', 'Content-Disposition', 'Date'],
    origin: (ctx: Context) => {
      return ctx.header.origin;
    },
  },
  session: {
    renew: true,
  },
  typeorm: {
    dataSource: {
      default: {
        _name: '默认数据源', //固定值不可修改
        _key: 'default', //固定值不可修改
        _dialect: 'mysql', //数据库方言
        _printSql: true, //打印SQL
        type: 'mysql', //数据库类型
        database: 'magic_node', //数据库
        username: 'root', //数据库账号
        password: '12345678', //数据库密码
        port: 3306, //数据库端口
      },
    },
  },
  upload: {
    // mode: UploadMode, 默认为file，即上传到服务器临时目录，可以配置为 stream
    mode: 'file',
    // fileSize: string, 最大上传文件大小，默认为 10mb
    fileSize: '10mb',
    // whitelist: string[]，文件扩展名白名单
    whitelist: [...uploadWhiteList, '.log'],
    // tmpdir: string，上传的文件临时存储路径
    tmpdir: join(tmpdir(), 'midway-upload-files'),
    // cleanTimeout: number，上传的文件在临时目录中多久之后自动删除，默认为 5 分钟
    cleanTimeout: 5 * 60 * 1000,
    // base64: boolean，设置原始body是否是base64格式，默认为false，一般用于腾讯云的兼容
    base64: false,
  },
  midwayLogger: {
    default: {
      dir: 'logs',
      maxSize: '100m',
      maxFiles: '31d',
    },
    clients: {
      magic: {
        fileLogName: 'magic-node.log',
      },
    },
  },
  captcha: {
    expirationTime: 1800,
    idPrefix: 'midway:vc',
  },
  magic: {
    prefix: '/magic',
    editorConfigPath: path.normalize(
      path.join(process.cwd(), 'static', 'js', 'editor-config.js')
    ),
    typesPath: path.normalize(path.join(process.cwd(), 'static', 'types')),
    security: [
      {
        username: 'admin',
        password: '123456',
        permission: 'developer',
      },
      {
        username: 'test',
        password: 'test',
        permission: 'readOnly',
      },
    ],
    resource: {
      type: 'file',
      location: '/data/script',
      tableName: 'magic_resource',
    },
    crud: {
      logicDeleteColumn: 'deleted',
      logicDeleteValue: 1,
    },
    openapi: {
      enabled: true,
      route: {
        tags: ['Magic Definition'],
        // deprecated: true,
        security: [
          {
            ApiKeyAuth: [],
          },
        ],
      },
      tags: [
        {
          name: 'Magic Definition',
          description: '由MagicNode定义的接口',
        },
      ],
      info: {
        title: 'Magic-Node',
        description: 'Magic-Node 接口定义',
        version: '1.0',
      },
      components: {
        securitySchemes: {
          ApiKeyAuth: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
          },
        },
      },
    },
  },
} as MidwayConfig;
