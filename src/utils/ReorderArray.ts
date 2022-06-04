const reorder = (array: any[], fromIndex: number, toIndex: number) => {
  const res = Array.from(array);
  const [movedElement] = res.splice(fromIndex, 1);

  res.splice(toIndex, 0, movedElement);

  return res;
};

export default reorder;
