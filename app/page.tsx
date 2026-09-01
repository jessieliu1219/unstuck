"use client";

import { UnstuckApp } from "@/components/UnstuckApp";
import { copy } from "@/lib/copy/en";
import { reasoning } from "@/lib/reasoning/en";

export default function Home() {
  return <UnstuckApp copy={copy} reasoning={reasoning} />;
}
