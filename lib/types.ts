export type ScenarioId =
  | "exercise"
  | "work"
  | "message"
  | "rest"
  | "cleaning"
  | "generic";

export type FrictionId =
  | "too_big"
  | "unclear_start"
  | "low_energy"
  | "emotional_avoidance"
  | "social_discomfort"
  | "too_much_commitment"
  | "transition"
  | "perfectionism"
  | "dont_want_to";

export interface FrictionOption {
  id: FrictionId;
  label: string;
}

export interface ClarificationResult {
  question: string;
  options: FrictionOption[];
}

export interface ActionResult {
  action: string;
  subtext: string;
}

export interface SessionContext {
  intention: string;
  scenarioId: ScenarioId;
  frictionId: FrictionId;
}

export type AppStep =
  | "intention"
  | "loading"
  | "friction"
  | "action"
  | "continue";
