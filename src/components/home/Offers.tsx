import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";

const offers: {
  badge: string;
  title: string;
  description: string;
  off: string;
  code: string;
  btn: string;
  style: {
    card: string;
    text: string;
  };
}[] = [
  {
    badge: "🔥 Deal of the Day",
    title: "Fresh Organic Fruits",
    description: "Get up to 40% off on selected organic fruits",
    off: "40% OFF",
    code: "ORGANIC40",
    btn: "Shop Now",
    style: {
      card: "from-emerald-500 to-emerald-700",
      text: "text-primary-800",
    },
  },
  {
    badge: "✨ New Arrivals",
    title: "Exotic Vegetables",
    description: "Discover our latest collection of premium vegetables",
    off: "25% OFF",
    code: "FRESH25",
    btn: "Explore Now",
    style: { card: "from-orange-400 to-[#ff2056]", text: "text-orange-500" },
  },
];

export default function Offers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-4">
      {offers.map(({ badge, btn, title, description, off, code, style }) => (
        <Card
          key={title}
          className={`relative gap-0 text-white py-8 rounded-xl bg-linear-to-br ${style.card} before:size-40 before:rounded-full before:absolute before:-top-20 before:-right-20 before:bg-white/10 after:size-40 after:rounded-full after:absolute after:-bottom-20 after:-left-20 after:bg-white/10`}
        >
          <CardHeader className="px-8 mb-4 gap-0">
            <Badge className="h-auto mb-4 px-3 py-1 bg-white/20 text-sm">
              {badge}
            </Badge>

            <CardTitle className="mb-2 text-2xl font-bold">{title}</CardTitle>

            <CardDescription className="font-medium text-white/80 text-base">
              {description}
            </CardDescription>
          </CardHeader>

          <CardContent className="px-8 mb-6 flex items-center gap-4">
            <span className="text-3xl font-bold shrink-0">{off}</span>
            <div className="shrink-0">
              <span className="text-white/80 text-sm">Use code: </span>
              <span className="text-sm font-bold">{code}</span>
            </div>
          </CardContent>

          <CardFooter className="px-8">
            <Link
              href="/products"
              className={`px-6 py-3 flex gap-2 items-center bg-white ${style.text} font-semibold text-base rounded-full w-fit hover:scale-[1.05] transition-transform`}
            >
              {btn}
              <ArrowRight className="size-4" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
