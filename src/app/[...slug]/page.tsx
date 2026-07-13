import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageBody } from "@/components/site-shell";
import { getPageByPath, getSiblingPages, sitePages } from "@/lib/site";
export const dynamicParams = false;
type PageProps = { params: Promise<{ slug: string[] }> };
export function generateStaticParams() {
  return sitePages.map((page) => ({ slug: page.path }));
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageByPath(slug);
  if (!page) {
    return { title: "Brixs Chain" };
  }
  const imagePath = `/assets/og/${slug.join("-")}.png`;
  return { 
    title: `${page.title} | Brixs Chain`, 
    description: page.summary,
    openGraph: {
      images: [{ url: imagePath, width: 1200, height: 630 }]
    },
    twitter: {
      card: "summary_large_image",
      images: [imagePath]
    }
  };
}
export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageByPath(slug);
  if (!page) {
    notFound();
  }
  return <PageBody page={page} siblings={getSiblingPages(page)} />;
}
