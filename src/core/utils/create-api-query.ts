import { formatISO, startOfYear, endOfYear } from "date-fns";
export const prerender = true;

const whereQuery = (whereFilter: { prop: string, conditional: string, value: string }[]): string => {
  const filterQueries: string[] = whereFilter.map((filter) => `${filter.prop} ${filter.conditional} '${filter.value}'`);
  
  return `&$where=${filterQueries.join(' AND ')}`;
}

const orderQuery = (column: string, order: string): string => {
  return `$order=${column} ${order}`;
}

const whereDateQuery = (whereDateFilter: { start: string, end: string }): string  => {
  return ` AND start_date_time between '${whereDateFilter.start}' and '${whereDateFilter.end}'`
}

const createApiQuery = (queryObj: { limit?: string, start?: string, end?: string }): string => {
  let query = "?";

  if (queryObj.limit) {
    const startQueryDate: string = new Date(formatISO(startOfYear(new Date()))).toISOString().replace('Z', '');
    const endQueryDate: string = new Date(formatISO(endOfYear(new Date()))).toISOString().replace('Z', '');

    query += `$limit=${queryObj.limit}&${orderQuery('start_date_time', 'ASC')}`;
    query += whereQuery([{ prop: 'event_type', conditional: 'like', value: 'Parade' }]);
    query += whereDateQuery({ start: startQueryDate, end: endQueryDate});
  }

  return query;
}

export default createApiQuery;