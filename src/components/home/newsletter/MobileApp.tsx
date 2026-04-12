import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MobileApp() {
  return (
    <Card className="relative py-8 gap-5 rounded-none shadow-none ring-0 bg-transparent">
      <div
        className="absolute -z-1 inset-0 bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white 
          before:absolute before:top-0 before:right-0 before:size-32 before:bg-emerald-500/20 before:rounded-full before:blur-lg 
          after:absolute after:bottom-0 after:left-0 after:size-24 after:bg-teal-500/20 after:rounded-full after:blur-xl"
      ></div>

      <CardHeader className="px-8 gap-0">
        <Badge className="mb-5 bg-emerald-500/20 text-emerald-400 font-semibold px-3 py-1.5 border-emerald-500/30">
          📱 MOBILE APP
        </Badge>

        <CardTitle className="text-2xl font-bold text-white mb-4.5">
          Shop Faster on Our App
        </CardTitle>

        <CardDescription className="text-gray-400 text-sm">
          Get app-exclusive deals & 15% off your first order.
        </CardDescription>
      </CardHeader>

      <CardContent className="px-8 flex flex-col gap-3 pt-2">
        <span className="flex items-center gap-3 cursor-pointer bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]">
          <svg
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4648 10.4961C17.457 9.0625 18.1055 7.98047 19.418 7.18359C18.6836 6.13281 17.5742 5.55469 16.1094 5.44141C14.7227 5.33203 13.207 6.25 12.6523 6.25C12.0664 6.25 10.7227 5.48047 9.66797 5.48047C7.48828 5.51562 5.17188 7.21875 5.17188 10.6836C5.17188 11.707 5.35937 12.7656 5.73438 13.8555C6.23438 15.2891 8.03906 18.8047 9.92188 18.7461C10.9062 18.7227 11.6016 18.0469 12.8828 18.0469C14.125 18.0469 14.7695 18.7461 15.8672 18.7461C17.7656 18.7188 19.3984 15.5234 19.875 14.0859C17.3281 12.8867 17.4648 10.5703 17.4648 10.4961ZM15.2539 4.08203C16.3203 2.81641 16.2227 1.66406 16.1914 1.25C15.25 1.30469 14.1602 1.89063 13.5391 2.61328C12.8555 3.38672 12.4531 4.34375 12.5391 5.42188C13.5586 5.5 14.4883 4.97656 15.2539 4.08203Z"
              fill="white"
            />
          </svg>

          <div className="flex flex-col">
            <span className="text-[10px] font-medium text-gray-400 uppercase">
              Download on
            </span>
            <span className="text-sm font-semibold text-white">App Store</span>
          </div>
        </span>

        <span className="flex items-center gap-3 cursor-pointer bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl transition-all hover:scale-[1.02]">
          <svg
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2188 9.15234L6.59766 0.507812L17.5664 6.80469L15.2188 9.15234ZM4.34766 0C3.83984 0.265625 3.5 0.75 3.5 1.37891V18.6172C3.5 19.2461 3.83984 19.7305 4.34766 19.9961L14.3711 9.99609L4.34766 0ZM20.957 8.8125L18.6562 7.48047L16.0898 10L18.6562 12.5195L21.0039 11.1875C21.707 10.6289 21.707 9.37109 20.957 8.8125ZM6.59766 19.4922L17.5664 13.1953L15.2188 10.8477L6.59766 19.4922Z"
              fill="white"
            />
          </svg>

          <div className="flex flex-col">
            <span className="text-[10px] font-medium text-gray-400 uppercase">
              Get it on
            </span>
            <span className="text-sm font-semibold text-white">
              Google Play
            </span>
          </div>
        </span>
      </CardContent>

      <CardFooter className="px-8 flex items-center gap-2 pt-2 text-sm font-medium">
        <span className="text-yellow-400">★★★★★</span>
        <span className="text-gray-400  shrink-0">4.9 • 100K+ downloads</span>
      </CardFooter>
    </Card>
  );
}
