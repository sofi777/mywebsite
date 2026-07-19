import { getEntry } from "astro:content";
import type { CollectionEntry } from "astro:content";

export type Business = CollectionEntry<"business">["data"];
export type Service = Business["services"][number];
export type Package = Business["packages"][number];

const entry = await getEntry("business", "business");
if (!entry) {
  throw new Error(
    "Missing 'business' content entry — expected src/content/business/business.yaml"
  );
}

export const business: Business = entry.data;
