import AddressCard from "@/components/addresses/Card";
import EmptyState from "@/components/shared/Empty";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { getAddresses } from "@/services/addresses";
import { MapPin, Plus } from "lucide-react";

export default async function Addresses() {
  const addresses = await getAddresses();

  return (
    <TabsContent value="addresses" className="flex-1 min-w-0">
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-gray-900 text-xl font-bold">My Addresses</h2>
            <p className="text-gray-500 font-medium tect-sm">
              Manage your saved delivery addresses
            </p>
          </div>

          <Button className="shrink-0 rounded-xl py-2.5 px-5 h-auto text-sm font-semibold bg-primary-main text-white hover:bg-primary-700 hover:text-white">
            <Plus className="size-4" /> Add Address
          </Button>
        </div>

        {addresses.length === 0 ? (
          <EmptyState
            title="No Addresses Yet"
            description="Add your first delivery address to make checkout faster and easier."
            icon={<MapPin className="m-auto size-8" />}
            action={
              <Button className="py-2.5 px-5 rounded-xl h-auto text-sm font-semibold bg-primary-main text-white hover:bg-primary-700 hover:text-white">
                <Plus className="size-4" /> Add Your First Address
              </Button>
            }
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {addresses.map((address) => (
              <AddressCard key={address._id} {...address} />
            ))}
          </div>
        )}
      </div>
    </TabsContent>
  );
}
