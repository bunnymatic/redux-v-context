export const isEmpty = (
  arr: Array<any> | string | null | undefined
): boolean => {
  return !arr || arr.length === 0;
};

export const logRendering = (component: string) => {
  console.log(`[${Date.now()}] Rendering ${component}`);
};
