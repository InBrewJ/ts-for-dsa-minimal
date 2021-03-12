export type TranslationConfig = Map<string, string>;

export const translateObj = (obj, conf: TranslationConfig) => {
  const translated = Object.keys(obj).map((key) => {
    const val = obj[key];
    if (conf.has(key)) {
      return [conf.get(key), val];
    } else {
      return [key, val];
    }
  });
  return Object.fromEntries(translated as any[]);
};
