import * as bcrypt from 'bcryptjs';
import { Provide } from '@midwayjs/core';

@Provide()
export class PasswordEncoder {
  /**
   * 加密。加上前缀{bcrypt}，为了兼容多种加密算法，这里暂时只实现bcrypt算法
   */
  encrypt(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return '{bcrypt}' + hash;
  }

  /**
   * 解密
   */
  decrypt(password: string, hash: string): boolean {
    if (hash.indexOf('{bcrypt}') === 0) {
      hash = hash.slice(8);
    }
    return bcrypt.compareSync(password, hash);
  }
}
