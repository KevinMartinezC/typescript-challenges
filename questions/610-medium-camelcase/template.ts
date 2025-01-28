export type CamelCase<S extends string> =
  S extends `${infer U}-${infer R}`
  ? R extends `${Capitalize<R>}`
  ? `${U}-${CamelCase<R>}`
  : `${U}${CamelCase<Capitalize<R>>}`
  : S
