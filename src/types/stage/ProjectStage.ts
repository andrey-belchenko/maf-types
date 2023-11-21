import { Expression } from "../Expression";
import { Literal } from "../Literal";

export interface ProjectStage {
  $project: ProjectStageOptions;
}

export interface ProjectStageOptions {
  [x: string | symbol]: Expression;
}
