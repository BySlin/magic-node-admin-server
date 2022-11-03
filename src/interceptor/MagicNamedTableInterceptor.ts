import { NamedTable, NamedTableInterceptor, SqlMode } from 'magic-node';
import { idSequence } from '@theroyalwhee0/snowman';
import * as dayjs from 'dayjs';
import { Context } from '@midwayjs/core';
import { ADMIN_TENANT_ID, COMMON_FIELD, TENANT_MODE } from '../constant';

const accountIds = idSequence();
const formatTemplate = 'YYYY-MM-DD HH:mm:ss';

export class MagicNamedTableInterceptor implements NamedTableInterceptor {
  preHandle(sqlMode: SqlMode, namedTable: NamedTable, ctx: Context) {
    if (namedTable.getAttribute(COMMON_FIELD)) {
      const { value } = accountIds.next();

      if (SqlMode.INSERT === sqlMode) {
        namedTable.column('id', value.toString());
        namedTable.column('createdAt', dayjs().format(formatTemplate));
        namedTable.column('createdBy', ctx.user?.id);

        //多租户模式填充租户字段
        if (namedTable.getAttribute(TENANT_MODE)) {
          namedTable.column('tenantId', ctx.user?.tenantId);
        }
      } else if (SqlMode.UPDATE === sqlMode) {
        namedTable.column('updatedAt', dayjs().format(formatTemplate));
        namedTable.column('updatedBy', ctx.user?.id);
      }
    }

    if (namedTable.getAttribute(TENANT_MODE)) {
      if (
        SqlMode.SELECT === sqlMode ||
        SqlMode.SELECT_ONE === sqlMode ||
        SqlMode.COUNT === sqlMode ||
        SqlMode.PAGE === sqlMode
      ) {
        //多租户模式添加租户字段比较
        if (ctx.user?.tenantId !== ADMIN_TENANT_ID) {
          namedTable.where().eq('tenantId', ctx.user.tenantId);
        }
      }
    }
  }
}
