import { NamedTable } from 'magic-node/dist';
import { COMMON_FIELD, TENANT_MODE } from '../constant';

/**
 * 保存到表中，当主键有值时则修改，否则插入
 * @param data
 */
NamedTable.prototype.saveOrUpdate = function (data?: Record<string, any>) {
  this.setAttribute(COMMON_FIELD, true);
  return this.save(data);
};

/**
 * 多租户模式
 */
NamedTable.prototype.tenant = function () {
  this.setAttribute(TENANT_MODE, true);
  return this;
};
