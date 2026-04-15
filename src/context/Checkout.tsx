"use client";

import { AddressData, schema } from "@/schema/address";
import { Address } from "@/types/addresses";
import { PaymentMethod } from "@/types/orders";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, useEffect, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

type CheckoutContext = {
  form: UseFormReturn<AddressData> | null;
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
  selectedAddress: Address["_id"] | "new";
  setSelectedAddress: (id: Address["_id"] | "new") => void;
};

export const CheckoutContext = createContext<CheckoutContext>({
  form: null,
  paymentMethod: "cash",
  setPaymentMethod: () => {},
  selectedAddress: "new",
  setSelectedAddress: () => {},
});

export function CheckoutProvider({
  children,
  addresses,
}: {
  children: React.ReactNode;
  addresses: Address[];
}) {
  const form = useForm<AddressData>({
    defaultValues: {
      phone: "",
      city: "",
      details: "",
    },
    resolver: zodResolver(schema),
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cash");
  const [selectedAddress, setSelectedAddress] =
    useState<CheckoutContext["selectedAddress"]>("new");

  useEffect(() => {
    const address = addresses.find((a) => a._id === selectedAddress);
    if (address) {
      form.setValue("city", address.city);
      form.setValue("details", address.details);
      form.setValue("name", address.name);
      form.setValue("phone", address.phone);
    } else {
      form.reset();
    }
  }, [selectedAddress, addresses, form]);

  return (
    <CheckoutContext.Provider
      value={{
        form,
        paymentMethod,
        setPaymentMethod,
        selectedAddress,
        setSelectedAddress,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}
