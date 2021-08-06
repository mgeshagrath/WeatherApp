export const toGradesFar = grades => Math.floor(grades * (9 / 5) + 32);

export const toGradesCel = grades => (grades - 32) * (5 / 9);

export const setCssProperty = (vary, value) =>
  document.documentElement.style.setProperty(`${vary}`, `${value}`);
