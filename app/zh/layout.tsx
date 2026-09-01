import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unstuck",
  description: "当你知道该做什么，就是没法开始时，帮你迈出第一步。",
};

export default function ChineseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
