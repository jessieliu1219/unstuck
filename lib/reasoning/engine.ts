import type {
  ActionResult,
  ClarificationResult,
  FrictionId,
  ScenarioId,
  SessionContext,
} from "../types";

export interface ScenarioDefinition {
  id: ScenarioId;
  keywords: string[];
  clarification: ClarificationResult;
  actions: Record<FrictionId, ActionResult>;
  followUpActions: Record<FrictionId, ActionResult>;
}

export interface ReasoningEngine {
  getScenarioId: (intention: string) => ScenarioId;
  getClarification: (intention: string) => ClarificationResult;
  getNextAction: (context: SessionContext) => ActionResult;
  getFollowUpAction: (context: SessionContext) => ActionResult;
}

export function createReasoningEngine(
  scenarios: ScenarioDefinition[],
  generic: ScenarioDefinition
): ReasoningEngine {
  function detectScenario(intention: string): ScenarioDefinition {
    const normalized = intention.toLowerCase();

    for (const scenario of scenarios) {
      if (scenario.keywords.some((keyword) => normalized.includes(keyword))) {
        return scenario;
      }
    }

    return generic;
  }

  return {
    getScenarioId(intention: string) {
      return detectScenario(intention).id;
    },

    getClarification(intention: string) {
      return detectScenario(intention).clarification;
    },

    getNextAction(context: SessionContext) {
      const scenario = detectScenario(context.intention);
      return (
        scenario.actions[context.frictionId] ??
        generic.actions[context.frictionId]
      );
    },

    getFollowUpAction(context: SessionContext) {
      const scenario = detectScenario(context.intention);
      return (
        scenario.followUpActions[context.frictionId] ??
        generic.followUpActions[context.frictionId]
      );
    },
  };
}
