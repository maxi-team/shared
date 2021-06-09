import type { AnyFunction } from './types.js';

/** @noinline */
export const isObject = /*#__NOINLINE__*/(obj: any): obj is Record<string, unknown> => {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }

  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
};

/** @nosideeffects */
export const isFunction = /*#__INLINE__*/(fn: any): fn is AnyFunction => {
  return typeof fn === 'function';
};

/** @nosideeffects */
export const isArray = /*#__INLINE__*/(arr: any): arr is any[] => {
  return Array.isArray(arr);
};

/** @nosideeffects */
export const isIterable = /*#__INLINE__*/(arr: any): arr is any[] => {
  return 'length' in arr;
};

/** @nosideeffects */
export const isNullable = /*#__INLINE__*/(nullable: any): nullable is null => {
  return nullable === null;
};

/** @nosideeffects */
export const isOptional = /*#__INLINE__*/(optional: any): optional is null | undefined => {
  return optional == null;
};

/** @nosideeffects */
export const isBoolean = /*#__INLINE__*/(bool: any): bool is boolean => {
  return bool === true || bool === false;
};

/** @noinline */
export const isEmptyObject = /*#__NOINLINE__*/(obj: Readonly<Record<string, unknown>>): obj is Record<string, never> => {
  for (const _ in obj) {
    return false;
  }
  return true;
};

/** @nosideeffects */
export const isEmptyArray = /*#__INLINE__*/(arr: readonly unknown[]): boolean => {
  return arr.length === 0;
};

/** @noinline */
export const isShallowEqual = /*#__NOINLINE__*/(a: any, b: any) => {
  if (a === b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  for (const i in a) {
    if (!(i in b)) {
      return false;
    }
  }

  for (const i in b) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

/** @noinline */
export const isShallowEqualArray = /*#__NOINLINE__*/(a: readonly any[], b: readonly any[]) => {
  if (a === b) {
    return true;
  }

  for (let i = a.length; i--;) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};
