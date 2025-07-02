"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import Ad from "@/src/components/Ad";

interface MDXRendererProps {
  code: string;
}
// test
export default function MDXRenderer({ code }: MDXRendererProps) {
  const MDXComponent = useMDXComponent(code);

  // MDX 컴포넌트에 전달할 컴포넌트 맵
  const components = {
    Ad,
  };

  return <MDXComponent components={components} />;
}
