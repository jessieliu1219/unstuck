"use client";

import { useRouter } from "next/navigation";
import { BrandMark } from "@/components/BrandMark";
import { OptionButton } from "@/components/OptionButton";
import { Screen, ScreenHeader } from "@/components/Screen";

export function LanguagePicker() {
  const router = useRouter();

  return (
    <Screen>
      <BrandMark />

      <ScreenHeader
        title="Choose your language"
        subtitle="选择你的语言"
      />

      <div className="space-y-3">
        <OptionButton index={0} onClick={() => router.push("/en")}>
          English
        </OptionButton>
        <OptionButton index={1} onClick={() => router.push("/zh")}>
          中文
        </OptionButton>
      </div>
    </Screen>
  );
}
