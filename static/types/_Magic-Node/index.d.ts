declare interface NamedTable {
  /**
   * 保存到表中，当主键有值时则修改，否则插入
   * @param data 各项列和值
   * @return 新增返回id 更新返回更新行数
   */
  saveOrUpdate(data?: { [key: string]: any } | boolean): Promise<number | any>;
}
