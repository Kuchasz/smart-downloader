export const checkExclusiveProperties = (obj, ...properties): boolean => {
	let propCount = 0;
	properties.forEach(p => {
		if (obj[p] != undefined)propCount++;
	});
	return propCount == 1;
}
