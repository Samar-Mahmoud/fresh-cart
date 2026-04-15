export interface AddressResponse {
  status: "success";
  results: number;
  data: Address[];
}

export interface Address {
  _id: string;
  name: string;
  details: string;
  phone: string;
  city: string;
}
