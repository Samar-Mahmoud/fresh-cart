export interface SuccessResponse {
  message: "success";
  user: User;
  token: string;
}

export interface ErrorResponse {
  message: string;
  statusMsg: "fail";
}

export interface User {
  name: string;
  email: string;
  role: string;
}

export type AuthResponse = SuccessResponse | ErrorResponse;

export interface LoginResponse {
  user: User;
  token: string;
}

export interface RegisterResponse {
  isError: boolean;
  message: string;
}
