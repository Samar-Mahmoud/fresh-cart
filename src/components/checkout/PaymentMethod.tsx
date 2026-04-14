"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import VisaIcon from "@/assets/Visa.svg";
import MasterIcon from "@/assets/Mastercard.svg";
import AmexIcon from "@/assets/Amex.svg";
import { Label } from "../ui/label";
import useCheckout from "@/hooks/useCheckout";

const methods: {
  title: string;
  description: string;
  value: string;
  icon: React.ReactNode;
  info?: React.ReactNode;
}[] = [
  {
    title: "Cash on Delivery",
    description: "Pay when your order arrives at your doorstep",
    value: "cash",
    icon: (
      <svg
        className="m-auto"
        width="25"
        height="20"
        viewBox="0 0 25 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 2.5C3.62109 2.5 2.5 3.62109 2.5 5V15C2.5 16.3789 3.62109 17.5 5 17.5H20C21.3789 17.5 22.5 16.3789 22.5 15V5C22.5 3.62109 21.3789 2.5 20 2.5H5ZM12.5 6.25C13.4946 6.25 14.4484 6.64509 15.1517 7.34835C15.8549 8.05161 16.25 9.00544 16.25 10C16.25 10.9946 15.8549 11.9484 15.1517 12.6517C14.4484 13.3549 13.4946 13.75 12.5 13.75C11.5054 13.75 10.5516 13.3549 9.84835 12.6517C9.14509 11.9484 8.75 10.9946 8.75 10C8.75 9.00544 9.14509 8.05161 9.84835 7.34835C10.5516 6.64509 11.5054 6.25 12.5 6.25ZM20 7.1875C20 7.35938 19.8594 7.50391 19.6875 7.48047C18.5547 7.33984 17.6602 6.44141 17.5195 5.3125C17.5 5.14062 17.6406 5 17.8125 5H19.6875C19.8594 5 20 5.14062 20 5.3125V7.1875ZM5 12.8125C5 12.6406 5.14062 12.4961 5.3125 12.5195C6.44531 12.6602 7.33984 13.5586 7.48047 14.6875C7.5 14.8594 7.35938 15 7.1875 15H5.3125C5.14062 15 5 14.8594 5 14.6875V12.8125ZM5.3125 7.48047C5.14062 7.5 5 7.35938 5 7.1875V5.3125C5 5.14062 5.14062 5 5.3125 5H7.1875C7.35938 5 7.50391 5.14062 7.48047 5.3125C7.33984 6.44531 6.44141 7.33984 5.3125 7.48047ZM19.6875 12.5195C19.8594 12.5 20 12.6406 20 12.8125V14.6875C20 14.8594 19.8594 15 19.6875 15H17.8125C17.6406 15 17.4961 14.8594 17.5195 14.6875C17.6602 13.5547 18.5586 12.6602 19.6875 12.5195Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Pay Online",
    description: "Secure payment with Credit/Debit Card via Stripe",
    value: "online",
    icon: (
      <svg
        className="m-auto"
        width="23"
        height="18"
        viewBox="0 0 23 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 1.125C3.25898 1.125 2.25 2.13398 2.25 3.375V13.5C2.25 14.741 3.25898 15.75 4.5 15.75H18C19.241 15.75 20.25 14.741 20.25 13.5V6.75C20.25 5.50898 19.241 4.5 18 4.5H4.78125C4.31367 4.5 3.9375 4.12383 3.9375 3.65625C3.9375 3.18867 4.31367 2.8125 4.78125 2.8125H18.2812C18.7488 2.8125 19.125 2.43633 19.125 1.96875C19.125 1.50117 18.7488 1.125 18.2812 1.125H4.5ZM16.875 9C17.1734 9 17.4595 9.11853 17.6705 9.3295C17.8815 9.54048 18 9.82663 18 10.125C18 10.4234 17.8815 10.7095 17.6705 10.9205C17.4595 11.1315 17.1734 11.25 16.875 11.25C16.5766 11.25 16.2905 11.1315 16.0795 10.9205C15.8685 10.7095 15.75 10.4234 15.75 10.125C15.75 9.82663 15.8685 9.54048 16.0795 9.3295C16.2905 9.11853 16.5766 9 16.875 9Z"
          fill="currentColor"
        />
      </svg>
    ),
    info: (
      <div className="flex items-center gap-2">
        <Image alt="Visa" className="h-5" src={VisaIcon} />
        <Image alt="Mastercard" className="h-5" src={MasterIcon} />
        <Image alt="Amex" className="h-5" src={AmexIcon} />
      </div>
    ),
  },
];

export default function PaymentMethod() {
  const { paymentMethod: value, setPaymentMethod } = useCheckout();

  return (
    <RadioGroup
      value={value}
      onValueChange={(v) => setPaymentMethod(v as "cash" | "online")}
    >
      {methods.map((method) => (
        <Label
          key={method.value}
          htmlFor={method.value}
          className="cursor-pointer"
        >
          <Field
            orientation="horizontal"
            className={`p-5 rounded-xl border-2  ${value === method.value ? "border-primary-500 bg-linear-to-r from-green-50 to-gray-100 shadow-sm" : "border-gray-200 bg-white hover:border-primary-400 hover:bg-primary-50/50"} transition-colors`}
          >
            <FieldContent className="flex flex-row items-center gap-4">
              {value === method.value ? (
                <div className="size-14 rounded-xl flex bg-linear-to-br from-primary-500 to-primary-600 text-white shadow-lg">
                  {method.icon}
                </div>
              ) : (
                <div className="size-14 rounded-xl flex bg-gray-100 text-gray-400">
                  {method.icon}
                </div>
              )}

              <div className="flex-1 min-w-0 space-y-0.5">
                <FieldLabel
                  htmlFor={method.value}
                  className={`text-base font-bold ${value === method.value ? "text-primary-700" : "text-gray-900"} transition-colors`}
                >
                  {method.title}
                </FieldLabel>
                <FieldDescription className="text-sm text-gray-500 font-medium">
                  {method.description}
                </FieldDescription>

                {method.info}
              </div>
            </FieldContent>

            <RadioGroupItem
              value={method.value}
              id={method.value}
              className="self-center"
            />
          </Field>
        </Label>
      ))}
    </RadioGroup>
  );
}
