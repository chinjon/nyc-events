import { EventTypeEnum } from "../enums/event-type.enum";

const whereQuery = (whereFilter: { prop: string, conditional: string, value: string }[]) => {
  const filterQueries = whereFilter.map((filter) => `${filter.prop} ${filter.conditional} '${filter.value}'`);
  return `&$where=${filterQueries.join(' AND ')}`;
}

const orderQuery = (column: string, order: string) => {
  return `$order=${column} ${order}`;
}

const whereDateQuery = (whereDateFilter: {start: string, end: string}) => {
  // const start = new Date(whereDateFilter.start).toISOString();
  // const end = new Date(whereDateFilter.end).toISOString();

  return ` AND start_date_time between '${whereDateFilter.start}' and '${whereDateFilter.end}'`
}

// `%0AWHERE%0A%20 (`start_date_time`%0A%20%20%20%20 BETWEEN "2024-11-11T00%3A00%3A00" %3A%3A floating_timestamp%0A%20%20%20%20 AND "2024-11-11T23%3A45%3A00" %3A%3A floating_timestamp)

const createApiQuery = (queryObj: { limit?: string, excludeType?: string[] }) => {
  let query = "?";

  if (queryObj.limit) {
    query += `$limit=${queryObj.limit}&${orderQuery('start_date_time', 'DESC')}`;
    query += whereQuery([{ prop: 'event_type', conditional: 'not like', value: EventTypeEnum.SportAdult }, { prop: 'event_type', conditional: 'not like', value: EventTypeEnum.SportYouth }]);
    query += whereDateQuery({start: "2024-11-11T05:00:01", end: "2024-11-11T23:11:59"});
  }

  const testDate = whereDateQuery({start: "2024-11-11T05:00:00", end: "2024-11-11T23:11:00"})
  console.log(testDate)

  return query;
}



export default createApiQuery;