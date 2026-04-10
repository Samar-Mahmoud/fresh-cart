import { getBrand } from "@/services/brands";
import { getCategory, getSubCategory } from "@/services/categories";
import { ProductsFilters } from "@/types/products";
import { HeaderProps } from "@/types/props";

export async function getHeaderData({
  brand,
  category,
  subcategory,
}: ProductsFilters) {
  let title = "All Products";
  let description = "Explore our complete product collection";
  let image = "";
  const links: HeaderProps["links"] = [{ label: "Home", href: "/" }];

  if (brand) {
    const { name, image: brandImage } = await getBrand(brand as string);
    links.push({ label: "Brands", href: "brands" });
    title = name;
    description = `Shop ${name} products`;
    image = brandImage;
  } else if (subcategory) {
    const { name } = await getSubCategory(subcategory);
    links.push({ label: "Categories", href: "categories" });
    title = name;
    description = `Browse ${name} products`;
  } else if (category) {
    const { name, image: categoryImage } = await getCategory(
      category as string,
    );
    links.push({ label: "Categories", href: "categories" });
    title = name;
    description = `Browse ${name} products`;
    image = categoryImage;
  }

  return { title, description, image, links };
}
