import { Pipeline } from "./types/Pipeline";
import { OrOperator } from "./types/operator/OrOperator";
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';


export function helloWorld(): string {
  return "Hello, world!";
}

console.log(helloWorld());

// let a: OrOperator = { $or: ""};
let p: Pipeline = [
  {
    $project: {
      aa: "111",
      cc: "$_id",
      bb: {
        $or: [],
      },
    },
  },
];

// function createObjectFromStrings<T extends string[]>(arr: T): { [K in T[number]]: any }{

// }

export default function createObj<
  T extends string,
  U = {
    [K in T]?: any;
  }
>(fields?: T[]): U {
  return {} as U;
}

// let a = createObj(["aaa", "bbb"]);

// function merge<T, U>(obj1: T, obj2: U): T & U {
//   return { ...obj1, ...obj2 };
// }
// let obj1 = { field1: "", field2: "" };

// let obj2 = { field3: "" };

// let obj3 = merge(obj1, obj2);

// function query(expr: (par: any) => any) {
//     const ast = parser.parse(expr.toString());
//     let sql = 'WHERE ';
//     traverse(ast, {
//         enter(path:any) {
//             if (path.isBinaryExpression()) {
//                 const left = path.node.left.property.name;
//                 const operator = path.node.operator === '==' ? '=' : path.node.operator;
//                 const right = path.node.right.value;
//                 sql += `${left} ${operator} ${right}`;
//             }
//         }
//     });
//     console.log(sql);
// }


function query(expr: (par: any) => any) {
    const ast = parser.parse(expr.toString());

    let sql = 'WHERE ';

    traverse(ast, {
        enter(path:any) {
            if (path.isBinaryExpression()) {
                let left = '';
                if (path.node.left.type === 'MemberExpression') {
                    left = getFullMemberExpression(path.node.left);
                }
                const operator = path.node.operator === '==' ? '=' : path.node.operator;
                const right = path.node.right.value;
                sql += `${left} ${operator} ${right}`;
            }
        }
    });

    console.log(sql);
}

function getFullMemberExpression(node: any): string {
    let result = '';
    if (node.object.type === 'MemberExpression') {
        result += getFullMemberExpression(node.object) + '.';
    } else if (node.object.type === 'Identifier') {
        result += node.object.name + '.';
    }
    result += node.property.name;
    return result;
}

query(($) => $.field.value == 5);
