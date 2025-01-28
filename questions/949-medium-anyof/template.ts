export type AnyOf<T extends readonly any[]> = T[number] extends Falsy ? false : true;

type Falsy = 0 | '' | false | [] | { [key: string]: never };


