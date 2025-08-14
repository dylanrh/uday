'use server';

/**
 * @fileOverview Provides AI-generated suggestions for volunteer opportunities with Audai, tailored to user interests and skills.
 *
 * @exports suggestVolunteerOpportunities - A function that takes user interests and skills as input and returns suggested volunteer opportunities.
 * @exports SuggestVolunteerOpportunitiesInput - The input type for the suggestVolunteerOpportunities function.
 * @exports SuggestVolunteerOpportunitiesOutput - The return type for the suggestVolunteerOpportunities function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestVolunteerOpportunitiesInputSchema = z.object({
  interests: z.string().describe('The interests of the user.'),
  skills: z.string().describe('The skills of the user.'),
});
export type SuggestVolunteerOpportunitiesInput = z.infer<typeof SuggestVolunteerOpportunitiesInputSchema>;

const SuggestVolunteerOpportunitiesOutputSchema = z.object({
  suggestions: z.string().describe('A list of suggested volunteer opportunities, tailored to the user\'s interests and skills.'),
});
export type SuggestVolunteerOpportunitiesOutput = z.infer<typeof SuggestVolunteerOpportunitiesOutputSchema>;

export async function suggestVolunteerOpportunities(input: SuggestVolunteerOpportunitiesInput): Promise<SuggestVolunteerOpportunitiesOutput> {
  return suggestVolunteerOpportunitiesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestVolunteerOpportunitiesPrompt',
  input: {schema: SuggestVolunteerOpportunitiesInputSchema},
  output: {schema: SuggestVolunteerOpportunitiesOutputSchema},
  prompt: `You are a volunteer coordinator for Audai, a non-profit organization. A user is interested in volunteering, and has the following interests and skills:

Interests: {{{interests}}}
Skills: {{{skills}}}

Based on these interests and skills, suggest some specific volunteer opportunities with Audai. Be specific and provide actionable suggestions.  Structure suggestions as a bulleted list.
`,
});

const suggestVolunteerOpportunitiesFlow = ai.defineFlow(
  {
    name: 'suggestVolunteerOpportunitiesFlow',
    inputSchema: SuggestVolunteerOpportunitiesInputSchema,
    outputSchema: SuggestVolunteerOpportunitiesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
