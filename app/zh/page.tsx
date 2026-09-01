"use client";

import { UnstuckApp } from "@/components/UnstuckApp";
import { copy } from "@/lib/copy/zh";
import { reasoning } from "@/lib/reasoning/zh";

export default function ChineseHome() {
  return <UnstuckApp copy={copy} reasoning={reasoning} />;
}
