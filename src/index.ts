import { Pipeline } from "./types/Pipeline";
import { OrOperator } from "./types/operator/OrOperator";

export function helloWorld(): string {
  return "Hello, world!";
}

console.log(helloWorld());

// let a: OrOperator = { $or: ""};
let p: Pipeline = [
  {
    $project: {
        aa:"111",
        cc:"$_id",
        bb: {
          $or:[]
        }
    },
  },
];
