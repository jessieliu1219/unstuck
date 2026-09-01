import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unstuck",
  description: "Help getting started when you know what to do but can't begin.",
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
