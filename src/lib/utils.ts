interface HasDate {
	datetime: Date | string
}

export function sortNewest<Type extends HasDate>(array: Type[]): Type[] {	
	array.sort((a, b) => new Date(b.datetime).valueOf() - new Date(a.datetime).valueOf())
	return array;
}