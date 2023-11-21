import { Expression } from "./Expression";

export interface ObjectExpression {
  [x: string | symbol]: Expression;
}
