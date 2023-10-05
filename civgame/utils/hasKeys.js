export const hasKeys = (obj) => {
  if (typeof obj === "undefined") return false;

  if (Object.keys(obj).length > 0) return true;

  return false;
};
