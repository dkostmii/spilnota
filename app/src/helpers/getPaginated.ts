export default function getPaginated<T>(items: T[], countPerPage: number): T[][] {
  const pages = Math.ceil(items.length / countPerPage);

  const result: T[][] = [];

  for (let page = 0; page < pages; page += 1) {
    const offset = countPerPage * page;
    result[page] = [];

    for (let i = 0; i < countPerPage; i += 1) {
      if (offset + i < items.length) {
        result[page][i] = items[offset + i];
      }
    }
  }

  return result;
}
