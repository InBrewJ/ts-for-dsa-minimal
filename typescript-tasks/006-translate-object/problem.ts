export type TranslationConfig = Map<string, string>;

export const translateObj = (
  obj: Record<string, any>,
  conf: TranslationConfig
) => {
  const translated = Object.keys(obj).map((key) => {
    let val = obj[key];
    const valIsObject = typeof val === "object" && val !== null;

    if (valIsObject) {
      val = translateObj(val, conf);
    }

    if (conf.has(key)) {
      return [conf.get(key), val];
    } else {
      return [key, val];
    }
  });
  return Object.fromEntries(translated as any[]);
};
