import { jwtDecode } from "jwt-decode";

export const varify = (token: string) => {
  const decoded = jwtDecode(token);
  return decoded;
};
