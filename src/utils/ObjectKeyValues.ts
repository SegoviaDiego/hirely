export function objectValues<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
}

export function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}
