import Blog from "@/src/feat-components/blog/Blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  return <Blog slug={slug} />;
}
