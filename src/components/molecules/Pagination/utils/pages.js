export const createPaginateList = (page, pages, nButtons) => {
  let list = [];

  if (pages <= nButtons) {
    list = createPagesList(pages);
  } else {
    let cantRightButtons = pages - page;
    let cantLeftButtons = page - 1;

    if (cantLeftButtons > cantRightButtons) {
      let maxNumberButton = Math.min(page + 4, page + cantRightButtons);
      list = createPagesList(nButtons, maxNumberButton - nButtons + 1);
    } else {
      let minNumberButton = Math.max(page - 4, page - cantLeftButtons);
      list = createPagesList(nButtons, minNumberButton);
    }
  }

  if (list[0] !== 1) {
    list[0] = 1;
    list[1] = 0;
  }

  if (list[list.length - 1] !== pages) {
    list[list.length - 2] = 0;
    list[list.length - 1] = pages;
  }

  return list;
};

const createPagesList = (cant, initValue = 1) => {
  const list = [];

  for (let i = 0; i < cant; i++) {
    list.push(initValue + i);
  }

  return list;
};
