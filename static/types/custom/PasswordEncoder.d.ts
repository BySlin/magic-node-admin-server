/**
 * 导入模块
 */
declare interface ImportModule {
  /**
   * @param moduleName 模块名称
   */
  (moduleName: 'passwordEncoder'): Promise<{
    /**
     * 密码加密
     * @param password 密码
     */
    encrypt(password: string): string;
    /**
     * 比较密码
     * @param password 密码
     * @param hash 加密后的密码
     */
    decrypt(password: string, hash: string): boolean;
  }>;
}
