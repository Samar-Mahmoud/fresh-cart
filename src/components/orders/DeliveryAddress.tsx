import { OrderItem } from "@/types/orders";
import { MapPin, Phone } from "lucide-react";

export default function DeliveryAddress({
  city,
  details,
  phone,
}: OrderItem["shippingAddress"]) {
  return (
    <div className="p-4 bg-white rounded-xl border border-gray-100 space-y-3">
      <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2">
        <div className="size-6 rounded-lg bg-blue-100 flex">
          <MapPin className="text-blue-600 m-auto size-3" />
        </div>
        Delivery Address
      </h4>

      <div className="space-y-2">
        <p className="font-medium text-gray-900 text-base">{city}</p>
        <p className="text-sm font-medium text-gray-600">{details}</p>
        <p className="text-sm font-medium text-gray-600 flex items-center gap-2 pt-1">
          <Phone className="size-3 text-gray-400 fill-gray-400" />
          {phone}
        </p>
      </div>
    </div>
  );
}
