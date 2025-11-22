import { get, post } from "@/utils/http-request";

//TODO: Create the type of params
export const fetchGoals = (params = {}) => {
  return get("/goals", params);
};
//TODO: Create the type of params
export const postGoal = (data = {}) => {
  return post("/goals", data);
};
