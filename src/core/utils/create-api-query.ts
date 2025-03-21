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

const createApiQuery = (queryObj: { limit?: string, excludeType?: string[] }) => {
  let query = "?";

  if (queryObj.limit) {
    query += `$limit=${queryObj.limit}&${orderQuery('start_date_time', 'DESC')}`;
    query += whereQuery([{ prop: 'event_type', conditional: 'like', value: 'Parade' }]);
    query += whereDateQuery({start: "2025-03-29T05:00:01", end: "2025-05-29T23:11:59"});
  }

  const testDate = whereDateQuery({start: "2025-01-29T05:00:00", end: "2025-01-29T23:11:00"})
  console.log(testDate)
  console.log(query)

  return query;
}



export default createApiQuery;