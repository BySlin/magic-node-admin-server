import { App, Configuration, ILifeCycle } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import * as security from '@midwayjs/security';
import * as bullBoard from '@midwayjs/bull-board';
import * as jwt from '@midwayjs/jwt';
import * as captcha from '@midwayjs/captcha';

import * as mn from 'magic-node';
import { SQLModule } from 'magic-node';

import { join } from 'path';
import { MagicNamedTableInterceptor } from './interceptor/MagicNamedTableInterceptor';

@Configuration({
  imports: [
    koa,
    validate,
    security,
    bullBoard,
    jwt,
    captcha,
    mn,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: koa.Application;

  async onReady() {
    SQLModule.addNamedTableInterceptor(new MagicNamedTableInterceptor());
  }
}
