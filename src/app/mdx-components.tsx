import Image from "next/image";
import Link from "next/link";
import Ad from "@/src/components/Ad";
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ImgHTMLAttributes,
} from "react";

// 타입 정의
type AnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;
type ImageProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

// MDX 컴포넌트 정의
export function useMDXComponents(
  components: Record<string, React.ComponentType>
) {
  return {
    // 기본 컴포넌트 오버라이드
    a: ({ href, ...props }: AnchorProps) => {
      if (!href) {
        return <a {...props} />;
      }

      return href.startsWith("/") || href.startsWith("#") ? (
        <Link href={href} {...props} />
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
      );
    },

    img: ({ src, alt, ...props }: ImageProps) => {
      if (!src) return null;
      return (
        <Image
          src={src}
          alt={alt || ""}
          width={720}
          height={400}
          style={{ maxWidth: "100%", height: "auto" }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...(props as any)}
        />
      );
    },

    // 커스텀 컴포넌트
    Ad,

    // 기존 컴포넌트 확장
    ...components,
  };
}
