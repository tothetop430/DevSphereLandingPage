import { apiRequest } from "./queryClient";
import { InsertWaitlistEntry } from "@shared/schema";

export const submitWaitlistEntry = async (data: InsertWaitlistEntry) => {
  const response = await apiRequest("POST", "/api/waitlist", data);
  return response.json();
};
