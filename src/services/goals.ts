import { get, post } from "@/utils/http-request";

export const fetchGoals = (params = {}) => {
  return get("/goals", params);
};

export const postGoal = (data = {}) => {
  return post("/goals", data);
};
