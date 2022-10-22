import { NamedTable, NamedTableInterceptor, SqlMode } from 'magic-node';
import { idSequence } from '@theroyalwhee0/snowman';
const accountIds = idSequence();
export class MagicNamedTableInterceptor implements NamedTableInterceptor {
  preHandle(sqlMode: SqlMode, namedTable: NamedTable) {
    const { value } = accountIds.next();

    if (sqlMode == SqlMode.INSERT) {
      namedTable.column('id', value.toString());
    }
  }
}
