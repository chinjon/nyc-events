import { formatISO, startOfYear, endOfYear } from "date-fns";

/**
 * @todo clean up this file
 */

const whereQuery = (whereFilter: { prop: string, conditional: string, value: string }[]) => {
  const filterQueries = whereFilter.map((filter) => `${filter.prop} ${filter.conditional} '${filter.value}'`);
  return `&$where=${filterQueries.join(' AND ')}`;
}

const orderQuery = (column: string, order: string) => {
  return `$order=${column} ${order}`;
}

const whereDateQuery = (whereDateFilter: { start: string, end: string }) => {
  return ` AND start_date_time between '${whereDateFilter.start}' and '${whereDateFilter.end}'`
}

const createApiQuery = (queryObj: { limit?: string, start?: string, end?: string }) => {
  let query = "?";

  if (queryObj.limit) {
    query += `$limit=${queryObj.limit}&${orderQuery('start_date_time', 'ASC')}`;
    query += whereQuery([{ prop: 'event_type', conditional: 'like', value: 'Parade' }]);
    query += whereDateQuery({ start: new Date(formatISO(startOfYear(new Date()))).toISOString().replace('Z', ''), end: new Date(formatISO(endOfYear(new Date()))).toISOString().replace('Z', '') });
  }

  return query;
}

export default createApiQuery;