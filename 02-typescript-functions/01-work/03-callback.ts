const screenFormatter = (transformerFunction: (number: number) => number): string => {
	const magicStaticNumber = 41;
	return `
	-------------------------------------------------------------------------	
	|			Ergebnis der Berechnung			    	|
	|				${transformerFunction(magicStaticNumber)}					|
	|			        ^w^					|
	-------------------------------------------------------------------------	
	`;
};

