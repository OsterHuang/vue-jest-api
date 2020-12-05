import http from "@/api/request";

export const inquiryUserRepository = username => {
  return http.get(`/users/${username}/repos`);
};
