export default function orderByProperties(object, order) {
  let result = [];

  for (const key in object) {
    if (!order.includes(key)) {
      result.push(key);
    }
  }

  result = [...order, ...result.sort()];

  const sortedProperties = [];
  for (const key of result) {
    sortedProperties.push({ key, value: object[key] });
  }
  return sortedProperties;
}
