export interface Response<T> {
  results?: number;
  metadata?: Metadata;
  data: T;
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}

export interface ErrorResponse {
  message: string;
  statusMsg: "fail";
}
