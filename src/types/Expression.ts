import { ArrayExpression } from "./ArrayExpression";
import { FieldPath } from "./FieldPath";
import { Literal } from "./Literal";
import { ObjectExpression } from "./ObjectExpression";
import { Operator } from "./operator/Operator";

export type Expression = Literal  | Operator  | ObjectExpression | ArrayExpression | FieldPath