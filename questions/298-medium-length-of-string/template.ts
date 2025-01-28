export type LengthOfString<S extends string, T extends any[] = []> = S extends `${infer F}${infer R}`
? LengthOfString<R, [F, ...T]>
: T['length'];
