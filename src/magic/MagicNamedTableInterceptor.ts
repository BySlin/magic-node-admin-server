import { NamedTable, NamedTableInterceptor, SqlMode } from 'magic-node';
import { idSequence } from '@theroyalwhee0/snowman';
import * as dayjs from 'dayjs';

const accountIds = idSequence();
const formatTemplate = 'YYYY-MM-DD HH:mm:ss';

export class MagicNamedTableInterceptor implements NamedTableInterceptor {
  preHandle(sqlMode: SqlMode, namedTable: NamedTable) {
    const { value } = accountIds.next();

    if (SqlMode.INSERT === sqlMode) {
      namedTable.column('id', value.toString());
      namedTable.column('createdAt', dayjs().format(formatTemplate));
    } else if (SqlMode.UPDATE === sqlMode) {
      namedTable.column('updatedAt', dayjs().format(formatTemplate));
    }
  }
}
