const createApiQuery = (queryObj: {limit?: string}) => {
  let query = "?";
  
  if (queryObj.limit) {
    query += `$limit=${queryObj.limit}`;
  }

  return query;
}

export default createApiQuery;