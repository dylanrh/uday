"use server";

import { suggestVolunteerOpportunities, type SuggestVolunteerOpportunitiesInput } from '@/ai/flows/suggest-volunteer-opportunities';
import { z } from 'zod';

const formSchema = z.object({
  interests: z.string().min(10, {
    message: "Please tell us a bit more about your interests (at least 10 characters).",
  }),
  skills: z.string().min(10, {
    message: "Please tell us a bit more about your skills (at least 10 characters).",
  }),
});

export type FormState = {
  message: string;
  suggestions?: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function getVolunteerSuggestions(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: "Failed to get suggestions. Please check the form.",
      issues,
      fields: {
        interests: parsed.error.flatten().fieldErrors.interests?.join(', ') || '',
        skills: parsed.error.flatten().fieldErrors.skills?.join(', ') || '',
      }
    };
  }

  try {
    const result = await suggestVolunteerOpportunities(parsed.data as SuggestVolunteerOpportunitiesInput);
    if (result.suggestions) {
      return { message: "Success!", suggestions: result.suggestions };
    } else {
        return { message: "Could not generate suggestions based on your input. Please try being more specific." };
    }
  } catch (e) {
    console.error(e);
    return {
      message: "An unexpected error occurred on our end. Please try again later.",
    };
  }
}
