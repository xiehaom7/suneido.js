/**
 * @file
 * Suneido globals
 */

import { defGlobal } from "./global";

import { SuObject } from "./suobject";
let Suneido = new SuObject();

// temp so BuiltDate works
import { SuDate } from "./sudate";
Suneido.put('BuiltDate', SuDate.literal('20160913'));
defGlobal('Suneido', Suneido);

import { su_display } from "./builtin/display";
defGlobal('Display', su_display);

import { su_print } from "./builtin/print";
defGlobal('Print', su_print);

import { su_type } from "./builtin/type";
defGlobal('Type', su_type);

import { su_object, su_objectq } from "./builtin/objects";
defGlobal('Object', su_object);
defGlobal('Object?', su_objectq);

import { su_date, su_dateq } from "./builtin/dates";
defGlobal('Date', su_date);
defGlobal('Date?', su_dateq);

import { su_built } from "./builtin/built";
defGlobal('Built', su_built);

import { su_stringq } from "./builtin/strings";
defGlobal('String?', su_stringq);

import { su_numberq } from "./builtin/numbers";
defGlobal('Number?', su_numberq);

/** FOR TESTING PURPOSES ONLY! */
defGlobal('Def', su_def);
function su_def(global: string, value: any): any {
    Object.freeze(value);
    defGlobal(global, value);
    return value;
}
import * as util from "./utility";
//BUILTIN Def(name, value)
//GENERATED start
(su_def as any).$call = su_def;
(su_def as any).$callNamed = function ($named: any, name: any, value: any) {
    ({ name = name, value = value } = $named);
    return su_def(name, value);
};
(su_def as any).$callAt = function (args: SuObject) {
    return (su_def as any).$callNamed(util.mapToOb(args.map), ...args.vec);
};
(su_def as any).$params = 'name, value';
//GENERATED end
