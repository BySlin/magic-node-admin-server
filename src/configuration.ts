import { Configuration, App } from '@midwayjs/decorator';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import * as security from '@midwayjs/security';
import * as bullBoard from '@midwayjs/bull-board';
import * as jwt from '@midwayjs/jwt';

import * as mn from 'magic-node';

import { join } from 'path';

@Configuration({
  imports: [
    koa,
    validate,
    security,
    bullBoard,
    jwt,
    mn,
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class ContainerLifeCycle {
  @App()
  app: koa.Application;

  async onReady() {}
}
