const groceriesList = () => {
  const res = new Map();
  const objets = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(objets)) {
    res.set(key, objets[key]);
  }
  return res;
};

export default groceriesList;
