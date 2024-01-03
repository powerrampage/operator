export { type DeepPartial, type DeepRequired, type DeepReadonly } from "./deep";

export type Nullable<Type = any> = {
	[Key in keyof Type]: Type[Key] | null;
};

export type ArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type ReadPrettify<T> = {
	[K in keyof T]: T[K];
} & {};

/**  ------------------------ RequiredExcept ------------------------
 *
 * Allows you to make only some properties required in an object.
 * You can use this to create a new type by applying
 * the `Required<T>`   type except for some properties.
 */
export type RequiredExcept<T, K extends keyof T> = Required<Pick<T, K>> &
	Pick<T, Exclude<keyof T, K>>;

/**  ------------------------ OmitByValue ------------------------
 *
 * Allows you to remove properties
 * from an object based on their value. You can use this
 * to create a new type that excludes some properties
 * whose values match a certain condition.
 */
export type OmitByValue<T, V> = Pick<
	T,
	{ [K in keyof T]: T[K] extends V ? never : K }[keyof T]
>;

/** ------------------------ GetOptionalKeys ------------------------
 *
 * Can be used to get all the keys of a type that are optional
 * (keys in union)
 */
export type GetOptionalKeys<T> = {
	[K in keyof T]-?: undefined extends T[K] ? K : never;
}[keyof T];

/** ------------------------ Mutable ------------------------
 *
 * Can be used to remove the readonly modifier from a type
 */
export type Mutable<T> = {
	-readonly [P in keyof T]: T[P];
};
