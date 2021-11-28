type idsCollection = { id: number }[];

export const findLastCityId = (objectIds: idsCollection) => {
  if (!objectIds.length) return 0;
  const ids = objectIds.map(e => e.id);
  return Math.max(...ids);
};

export const lastIdWithIncrement = (objectIds: idsCollection) => {
  const lastId = findLastCityId(objectIds);
  return lastId + 1;
};
