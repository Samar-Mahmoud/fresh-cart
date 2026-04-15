import { Address } from "@/types/addresses";
import RemoveAddressButton from "@/components/addresses/RemoveButton";
import EditAddressDialog from "@/components/addresses/Dialog";
import { Building2, Phone, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

export default function Card({ _id, city, details, phone, name }: Address) {
  return (
    <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex gap-4">
      <div className="shrink-0 size-11 rounded-xl bg-primary-50 text-primary-main flex">
        <svg
          className="m-auto size-5"
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.49883 5.15703C3.49883 2.30781 5.85039 0 8.74883 0C11.6473 0 13.9988 2.30781 13.9988 5.15703C13.9988 8.41914 10.7121 12.3293 9.33945 13.8195C9.0168 14.1695 8.47813 14.1695 8.15547 13.8195C6.78281 12.3293 3.49609 8.41914 3.49609 5.15703H3.49883ZM8.74883 7C9.21296 7 9.65808 6.81563 9.98627 6.48744C10.3145 6.15925 10.4988 5.71413 10.4988 5.25C10.4988 4.78587 10.3145 4.34075 9.98627 4.01256C9.65808 3.68437 9.21296 3.5 8.74883 3.5C8.2847 3.5 7.83958 3.68437 7.51139 4.01256C7.1832 4.34075 6.99883 4.78587 6.99883 5.25C6.99883 5.71413 7.1832 6.15925 7.51139 6.48744C7.83958 6.81563 8.2847 7 8.74883 7Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-2">
          {name}
        </h3>
        <p className="text-sm font-medium text-gray-600 line-clamp-4 mb-2">
          {details}
        </p>

        <div className="flex gap-4 items-center flex-wrap">
          <span className="shrink-0 flex gap-1.5 items-center text-sm font-medium text-gray-500">
            <Phone className="fill-current size-3" />
            {phone}
          </span>
          <span className="shrink-0 flex gap-1.5 items-center text-sm font-medium text-gray-500">
            <Building2 className="size-3" />
            {city}
          </span>
        </div>
      </div>

      <div className="flex gap-2 shrink-0">
        <EditAddressDialog
          data={{ city, details, phone, name }}
          addressId={_id}
        >
          <Button className="size-9 rounded-lg flex bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-700">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3989 0.579688L10.1712 1.80742L13.9419 5.57812L15.1696 4.35039C15.5415 3.98125 15.7493 3.47813 15.7493 2.95312C15.7493 2.42812 15.5415 1.925 15.1696 1.55586L14.1934 0.579688C13.8243 0.207813 13.3212 0 12.7962 0C12.2712 0 11.768 0.207813 11.3989 0.579688ZM9.2442 2.73438L3.35983 8.61602C3.06725 8.90859 2.85397 9.275 2.74186 9.67422L1.77389 13.1687C1.711 13.3957 1.77389 13.6418 1.94342 13.8086C2.11295 13.9754 2.35631 14.041 2.58327 13.9781L6.0778 13.0074C6.47702 12.8953 6.84069 12.6848 7.136 12.3895L13.0149 6.50508L9.2442 2.73438Z"
                fill="#4A5565"
              />
            </svg>
          </Button>
        </EditAddressDialog>

        <RemoveAddressButton
          id={_id}
          className="size-9 rounded-lg flex bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-700"
        >
          <Trash2 className="size-3.5" />
        </RemoveAddressButton>
      </div>
    </div>
  );
}
