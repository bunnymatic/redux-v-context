export const isEmpty = (
  arr: Array<any> | string | null | undefined
): boolean => {
  return !arr || arr.length === 0;
};
