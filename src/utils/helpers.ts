export function removeDuplicated(array: object[], key: string = "id") {
  const itemsObject: { [key: string]: any } = {};

  array.forEach((item: { [key: string]: any }) => {
    itemsObject[item[key]] = item;
  });

  return Object.keys(itemsObject).map(itemKey => itemsObject[itemKey]);
}
