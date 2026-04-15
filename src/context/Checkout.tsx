"use client";

import { schema } from "@/schema/address";
import { PaymentMethod } from "@/types/orders";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

type AddressFormValues = {
  phone: string;
  city: string;
  details: string;
};

type CheckoutContext = {
  form: UseFormReturn<AddressFormValues> | null;
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
};

export const CheckoutContext = createContext<CheckoutContext>({
  form: null,
  paymentMethod: "cash",
  setPaymentMethod: () => {},
});

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const form = useForm<AddressFormValues>({
    defaultValues: {
      phone: "",
      city: "",
      details: "",
    },
    resolver: zodResolver(schema),
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cash");

  return (
    <CheckoutContext.Provider value={{ form, paymentMethod, setPaymentMethod }}>
      {children}
    </CheckoutContext.Provider>
  );
}
