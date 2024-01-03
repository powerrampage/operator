/** ------------------------ DeepPartial ------------------------
 *
 * Allows you to make all properties
 * of an object optional recursively.
 */
export type DeepPartial<T> = T extends Function
	? T
	: T extends Array<infer InferredArrayMember>
	? DeepPartialArray<InferredArrayMember>
	: T extends object
	? DeepPartialObject<T>
	: T | undefined;

interface DeepPartialArray<T> extends Array<DeepPartial<T>> {}

type DeepPartialObject<T> = {
	[Key in keyof T]?: DeepPartial<T[Key]>;
};

/** ------------------------ DeepRequired ------------------------
 *
 * Allows you to make all properties
 * of an object required recursively.
 */
export type DeepRequired<T> = T extends object
	? { [P in keyof T]-?: DeepRequired<T[P]> }
	: T;

/** ------------------------ DeepReadonly ------------------------
 *
 * Type makes all properties of an object and
 * its nested objects readonly.
 */
export type DeepReadonly<T> = {
	readonly [P in keyof T]: T[P] extends Record<string, unknown>
		? DeepReadonly<T[P]>
		: T[P];
};
