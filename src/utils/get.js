const get = (object, path, initial) => {
  const result = path
    .split(".")
    .reduce((prev, cur) => prev && prev[cur], object);
  if (!result && initial !== undefined) {
    return initial;
  }
  return result;
};
