import { NamedTable, NamedTableInterceptor, SqlMode } from 'magic-node';
import { idSequence } from '@theroyalwhee0/snowman';
import * as dayjs from 'dayjs';
import { Context } from '@midwayjs/core';
import { COMMON_FIELD } from '../constant';

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
  }
}
