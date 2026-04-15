export interface SuccessResponse {
  message: "success";
  user: User;
}

export interface User {
  name: string;
  email: string;
  role: string;
}

export interface ErrorResponse {
  message: "fail";
  errors: {
    value: string;
    msg: string;
    param: string;
    location: string;
  };
}
