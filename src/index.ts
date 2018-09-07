export type Head<T extends any[]> = T extends [infer X, ...any[]] ? X : never;
export type Tail<T extends any[]> = ((...x: T) => void) extends ((x: any, ...xs: infer XS) => void) ? XS : never
export type Last<T extends any[]> = {
  0: never,
  1: Head<T>,
  2: Last<Tail<T>>,
}[T extends [] ? 0 : T extends [any] ? 1 : 2];
export type Cons<X, XS extends any[]> = ((h: X, ...args: XS) => void) extends ((...args: infer R) => void) ? R : []
export type Reverse<L extends any[], X extends any[]=[]> = {
  1: X, 0: Reverse<Tail<L>, Cons<Head<L>, X>>
}[L extends [] ? 1 : 0]