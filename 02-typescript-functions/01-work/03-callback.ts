const screenFormatter = (transformerFunction: (number: number) => number): string => {
	const magicStaticNumber = 41;
	return `
	-------------------------------------------------------------------------	
	|			Ergebniss der Berechnung			|
	|				${transformerFunction(magicStaticNumber)}					|
	|			        ^w^					|
	-------------------------------------------------------------------------	
	`;
};