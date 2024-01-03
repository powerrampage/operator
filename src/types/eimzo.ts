type Fields = "alias" | "disk" | "inn" | "name" | "path" | "serialNumber";

type ParsedAliasFields =
	| "1.2.860.3.16.1.1"
	| "1.2.860.3.16.1.2"
	| "businesscategory"
	| "c"
	| "cn"
	| "l"
	| "name"
	| "o"
	| "serialnumber"
	| "st"
	| "surname"
	| "t"
	| "uid"
	| "validfrom"
	| "validto";

export type ParsedAlias = {
	[key in ParsedAliasFields]?: string;
};

export type DSKEY = {
	[key in Fields]?: string;
} & {
	parsedAlias?: ParsedAlias;
	path?: string;
	type?: string | "pfx";
};
