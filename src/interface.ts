import '@midwayjs/core';

declare module '@midwayjs/core' {
  interface Context {
    user: any;
  }
}
