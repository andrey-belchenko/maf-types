import { BoolRef } from "../refs/BoolRef";

export interface OrOperator {
  $or: BoolRef[];
}

interface Test {
  aaa: BoolRef[];
}


