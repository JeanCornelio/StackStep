import type {
  FetchGoalsParams,
  SetGoal,
} from "@/pages/goals/components/types/goal.interface";
import { get, post } from "@/utils/http-request";

export const fetchGoals = (params: FetchGoalsParams) => {
  return get("/goals", params);
};

export const postGoal = (payload: SetGoal) => {
  return post("/goals", payload);
};
