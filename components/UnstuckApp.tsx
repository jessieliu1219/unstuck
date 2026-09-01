"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Screen, ScreenHeader } from "@/components/Screen";
import type { Copy } from "@/lib/copy/en";
import type { ReasoningEngine } from "@/lib/reasoning/engine";
import type {
  ActionResult,
  AppStep,
  ClarificationResult,
  FrictionId,
  SessionContext,
} from "@/lib/types";

type ContinueView = "choice" | "done";

interface UnstuckAppProps {
  copy: Copy;
  reasoning: ReasoningEngine;
}

export function UnstuckApp({ copy, reasoning }: UnstuckAppProps) {
  const [step, setStep] = useState<AppStep>("intention");
  const [intention, setIntention] = useState("");
  const [clarification, setClarification] =
    useState<ClarificationResult | null>(null);
  const [session, setSession] = useState<SessionContext | null>(null);
  const [currentAction, setCurrentAction] = useState<ActionResult | null>(null);
  const [continueView, setContinueView] = useState<ContinueView>("choice");
  const [isFollowUp, setIsFollowUp] = useState(false);

  const reset = useCallback(() => {
    setStep("intention");
    setIntention("");
    setClarification(null);
    setSession(null);
    setCurrentAction(null);
    setContinueView("choice");
    setIsFollowUp(false);
  }, []);

  const handleIntentionSubmit = () => {
    if (!intention.trim()) return;
    setClarification(reasoning.getClarification(intention.trim()));
    setStep("loading");
  };

  useEffect(() => {
    if (step !== "loading") return;

    const timer = setTimeout(() => {
      setStep("friction");
    }, 1200);

    return () => clearTimeout(timer);
  }, [step]);

  const handleFrictionSelect = (frictionId: FrictionId) => {
    if (!intention.trim()) return;

    const context: SessionContext = {
      intention: intention.trim(),
      scenarioId: reasoning.getScenarioId(intention.trim()),
      frictionId,
    };

    setSession(context);
    setCurrentAction(reasoning.getNextAction(context));
    setIsFollowUp(false);
    setStep("action");
  };

  const handleActionDone = () => {
    if (isFollowUp) {
      setContinueView("done");
      setStep("continue");
    } else {
      setContinueView("choice");
      setStep("continue");
    }
  };

  const handleOneMore = () => {
    if (!session) return;
    setCurrentAction(reasoning.getFollowUpAction(session));
    setIsFollowUp(true);
    setStep("action");
  };

  const handleImGood = () => {
    setContinueView("done");
  };

  return (
    <>
      {step === "intention" && (
        <Screen>
          <div className="mb-16 text-center">
            <p className="text-sm tracking-wide text-stone-warm uppercase">
              {copy.brand}
            </p>
          </div>

          <ScreenHeader
            title={copy.intentionTitle}
            subtitle={copy.intentionSubtitle}
          />

          <div className="space-y-6">
            <textarea
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleIntentionSubmit();
                }
              }}
              placeholder={copy.intentionPlaceholder}
              rows={4}
              autoFocus
              className="
                w-full resize-none rounded-2xl
                border border-cream-200 bg-white
                px-5 py-4 text-[16px] leading-relaxed
                text-stone-deep placeholder:text-stone-warm/60
                outline-none transition-colors duration-200
                focus:border-accent/40 focus:ring-2 focus:ring-accent/10
              "
            />

            <Button
              fullWidth
              onClick={handleIntentionSubmit}
              disabled={!intention.trim()}
            >
              {copy.helpMeStart}
            </Button>
          </div>
        </Screen>
      )}

      {step === "loading" && (
        <Screen>
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="animate-fade-in text-xl font-medium text-stone-deep">
              {copy.loading}
            </p>
          </div>
        </Screen>
      )}

      {step === "friction" && clarification && (
        <Screen>
          <ScreenHeader title={clarification.question} />

          <div className="space-y-3">
            {clarification.options.map((option, index) => (
              <button
                key={option.id}
                onClick={() => handleFrictionSelect(option.id)}
                className="
                  animate-fade-in-up w-full rounded-2xl
                  border border-cream-200 bg-white
                  px-5 py-4 text-left text-[15px]
                  text-stone-deep transition-all duration-200
                  hover:border-accent/30 hover:bg-cream-100
                  active:scale-[0.99]
                "
                style={{ animationDelay: `${index * 60}ms`, opacity: 0 }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </Screen>
      )}

      {step === "action" && currentAction && (
        <Screen>
          <div className="text-center">
            <p className="animate-fade-in text-2xl leading-snug font-medium tracking-tight text-stone-deep">
              {currentAction.action}
            </p>
            <p className="animate-fade-in animate-delay-100 mt-5 text-[15px] leading-relaxed text-stone-warm">
              {currentAction.subtext}
            </p>

            <div className="animate-fade-in animate-delay-200 mt-12">
              <Button fullWidth onClick={handleActionDone}>
                {copy.done}
              </Button>
            </div>
          </div>
        </Screen>
      )}

      {step === "continue" && continueView === "choice" && (
        <Screen>
          <div className="text-center">
            <p className="animate-fade-in text-xl font-medium text-stone-deep">
              {copy.moving}
            </p>
            <p className="animate-fade-in animate-delay-100 mt-8 text-[15px] text-stone-warm">
              {copy.wantOneMore}
            </p>

            <div className="animate-fade-in animate-delay-200 mt-8 space-y-3">
              <Button fullWidth onClick={handleOneMore}>
                {copy.giveMeOneMore}
              </Button>
              <Button fullWidth variant="secondary" onClick={handleImGood}>
                {copy.imGood}
              </Button>
            </div>
          </div>
        </Screen>
      )}

      {step === "continue" && continueView === "done" && (
        <Screen>
          <div className="text-center">
            <p className="animate-fade-in text-xl font-medium text-stone-deep">
              {copy.enoughForNow}
            </p>

            <button
              onClick={reset}
              className="animate-fade-in animate-delay-200 mt-12 text-sm text-stone-warm transition-colors hover:text-stone-deep"
            >
              {copy.startSomethingElse}
            </button>
          </div>
        </Screen>
      )}
    </>
  );
}
