import { ErrorResponse } from ".";

export interface SuccessResponse {
  message: "success";
  user: User;
  token: string;
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
  user?: User;
  token?: string;
}

export interface VerifyTokenResponse {
  message: "verified";
  decoded: {
    id: string;
    name: string;
    role: string;
  };
}

export interface ForgotPasswordResponse {
  statusMsg: "success";
  message: string;
}
