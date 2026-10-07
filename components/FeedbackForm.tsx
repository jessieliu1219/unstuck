"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import {
  insertUserFeedback,
  type JourneyData,
} from "@/lib/supabase/feedback";

const HELPFULNESS_OPTIONS = [
  { value: "1", label: "没什么帮助" },
  { value: "2", label: "有一点" },
  { value: "3", label: "有，帮到了" },
] as const;

type FeedbackView = "form" | "success";

interface FeedbackFormProps {
  journey: JourneyData;
}

export function FeedbackForm({ journey }: FeedbackFormProps) {
  const [view, setView] = useState<FeedbackView>("form");
  const [helpfulness, setHelpfulness] = useState<string | null>(null);
  const [outcome, setOutcome] = useState("");
  const [confusion, setConfusion] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!helpfulness) return;

    setIsSubmitting(true);
    setError(null);

    const { error: submitError } = await insertUserFeedback({
      ...journey,
      helpfulness,
      outcome: outcome.trim() || null,
      confusion: confusion.trim() || null,
    });

    setIsSubmitting(false);

    if (submitError) {
      setError("好像没有发送成功，请再试一次。");
      return;
    }

    setView("success");
  };

  if (view === "success") {
    return (
      <div className="animate-fade-in mt-10 text-center">
        <p className="text-[15px] leading-relaxed text-stone-deep">
          谢谢你的反馈 🍋
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-stone-warm">
          每一条都会帮助我把 Unstuck 做得更好。
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in mt-10 space-y-8 text-left">
      <div className="space-y-3">
        <p className="text-[15px] font-medium text-stone-deep">
          刚才有帮你从「卡住」里出来一点吗？
        </p>
        <div className="space-y-3">
          {HELPFULNESS_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setHelpfulness(option.value)}
              className={`
                w-full rounded-2xl border px-5 py-4 text-left text-[15px]
                transition-all duration-200 active:scale-[0.99]
                ${
                  helpfulness === option.value
                    ? "border-accent/50 bg-cream-100 text-stone-deep"
                    : "border-cream-200 bg-white text-stone-deep hover:border-accent/30 hover:bg-cream-100"
                }
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[15px] font-medium text-stone-deep">
          用完之后，你有做出什么小行动吗？
        </p>
        <textarea
          value={outcome}
          onChange={(e) => setOutcome(e.target.value)}
          placeholder="比如：关掉了手机、打开了文档、开始做第一步……"
          rows={3}
          className="
            w-full resize-none rounded-2xl
            border border-cream-200 bg-white
            px-5 py-4 text-[16px] leading-relaxed
            text-stone-deep placeholder:text-stone-warm/60
            outline-none transition-colors duration-200
            focus:border-accent/40 focus:ring-2 focus:ring-accent/10
          "
        />
      </div>

      <div className="space-y-3">
        <p className="text-[15px] font-medium text-stone-deep">
          有没有哪里让你觉得困惑或不太顺？
        </p>
        <textarea
          value={confusion}
          onChange={(e) => setConfusion(e.target.value)}
          placeholder="告诉我就好"
          rows={3}
          className="
            w-full resize-none rounded-2xl
            border border-cream-200 bg-white
            px-5 py-4 text-[16px] leading-relaxed
            text-stone-deep placeholder:text-stone-warm/60
            outline-none transition-colors duration-200
            focus:border-accent/40 focus:ring-2 focus:ring-accent/10
          "
        />
      </div>

      {error && (
        <p className="text-center text-sm text-stone-warm">{error}</p>
      )}

      <Button
        fullWidth
        onClick={handleSubmit}
        disabled={!helpfulness || isSubmitting}
      >
        {isSubmitting ? "发送中…" : "发送反馈"}
      </Button>
    </div>
  );
}
