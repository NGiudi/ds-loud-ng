export const createPaginateList = (page, pages, nButtons) => {
  const centerValue = Math.ceil(nButtons / 2);

  if (pages <= nButtons) {
    //? more buttons than pages.
    return createPagesList(pages);
  } else if (page > centerValue && page <= pages - centerValue) {
    //? ellipsis icon on both sides.
    const cantButtons = nButtons - 4;
    const initValue = page - Math.floor(cantButtons / 2);

    const list = createPagesList(cantButtons, initValue);
    list.unshift(1, 0);
    list.push(0, pages);

    return list;
  } else if (page > centerValue) {
    //? ellipsis icon left.
    const list = createPagesList(nButtons - 2, pages - nButtons + 3);
    list.unshift(1, 0);
    return list;
  } else if (page < pages - centerValue) {
    const list = createPagesList(nButtons - 2, 1);
    //? ellipsis icon right.
    list.push(0, pages);
    return list;
  }
};

const createPagesList = (cant, initValue = 1) => {
  const list = [];

  for (let i = 0; i < cant; i++) {
    list.push(initValue + i);
  }

  return list;
};
