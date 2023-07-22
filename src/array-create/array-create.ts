export function arrayOfUndefined(length: number): readonly undefined[] {
  return Array.from({ length }, () => undefined);
}

export function arrayOfConstant<T>(length: number, value: T): readonly T[] {
  return Array.from({ length }, () => value);
}

export function arrayOfMapped<T>(
  length: number,
  mapper: (index: number) => T
): readonly T[] {
  return Array.from({ length }, (_, index) => mapper(index));
}
