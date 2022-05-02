export type GenericPropsObjectNested = {
  [key: string]: {
    [key: string]: string | number | Record<string, string>;
  };
};
