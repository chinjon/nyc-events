import { EventTypeEnum } from "../enums/event-type.enum";

const whereQuery = (whereFilter: { prop: string, conditional: string, value: string }[]) => {
  const filterQueries = whereFilter.map((filter) => `${filter.prop} ${filter.conditional} '${filter.value}'`);
  return `&$where=${filterQueries.join(' AND ')}`;
}

const orderQuery = (column: string, order: string) => {
  return `$order=${column} ${order}`;
}

const createApiQuery = (queryObj: { limit?: string, excludeType?: string[] }) => {
  let query = "?";

  if (queryObj.limit) {
    query += `$limit=${queryObj.limit}&${orderQuery('start_date_time', 'DESC')}`;
    query += whereQuery([{ prop: 'event_type', conditional: 'not like', value: EventTypeEnum.SportAdult }, { prop: 'event_type', conditional: 'not like', value: EventTypeEnum.SportYouth }]);
  }

  return query;
}



export default createApiQuery;