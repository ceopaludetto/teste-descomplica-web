export function removeFalsy<T extends Record<string, any>>(object: T) {
  return Object.fromEntries(Object.entries(object).filter(([, value]) => !!value));
}
