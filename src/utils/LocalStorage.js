export const getStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setStorage = (key, todo) =>
  localStorage.setItem(key, JSON.stringify(todo));
