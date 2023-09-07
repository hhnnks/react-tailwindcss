const number: number = 1;
const string: string = "1";
const boolean: boolean = true;
const nulls: null = null;
const undefineds: undefined = undefined;
const symbol: symbol = Symbol("mySymbol");
let anys: any = 1;
let unknowns: unknown = 1;

anys = "123123";
unknowns = "123123";

//!

let name1: string = "name1";

name1 = 123 as unknown as number;

function names() {}
