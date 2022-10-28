import '@midwayjs/core';

declare module '@midwayjs/core' {
  interface Context {
    user: any;
  }
}
declare module 'magic-node' {
  interface NamedTable {
    saveOrUpdate: () => Promise<void>;
    tenant: () => this;
  }
}
