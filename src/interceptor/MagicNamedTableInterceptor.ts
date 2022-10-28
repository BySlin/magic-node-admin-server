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
        if (ctx.user?.tenantId !== ADMIN_TENANT_ID) {
          namedTable.where().eq('tenantId', ctx.user.tenantId);
        }
      }
    }
  }
}
