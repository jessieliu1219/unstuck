import { getSupabaseBrowserClient } from "./client";

export interface JourneyData {
  intention: string;
  scenario_id: string;
  friction_id: string;
  primary_action: string;
  took_follow_up: boolean;
  follow_up_action: string | null;
}

export interface UserFeedbackInsert extends JourneyData {
  helpfulness: string;
  outcome?: string | null;
  confusion?: string | null;
}

export async function insertUserFeedback(feedback: UserFeedbackInsert) {
  const supabase = getSupabaseBrowserClient();

  return supabase.from("unstuck_user_feedback").insert(feedback);
}
