"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import { getVolunteerSuggestions, type FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const initialState: FormState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Getting Suggestions...
        </>
      ) : (
        "Get AI Suggestions"
      )}
    </Button>
  );
}

export function VolunteerSuggestionForm() {
  const [state, formAction] = useFormState(getVolunteerSuggestions, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === "Success!") {
      formRef.current?.reset();
       toast({
        title: "Suggestions Ready!",
        description: "We've found some opportunities for you.",
      });
    } else if (state.message !== "" && state.issues) {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description: state.issues.join("\n"),
      });
    } else if (state.message !== "" && !state.suggestions) {
       toast({
        variant: "destructive",
        title: "Could not get suggestions",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <div className="space-y-6">
      <form ref={formRef} action={formAction} className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="interests">Your Interests</Label>
          <Textarea
            id="interests"
            name="interests"
            placeholder="e.g., teaching children, environmental conservation, community building"
            rows={3}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="skills">Your Skills</Label>
          <Textarea
            id="skills"
            name="skills"
            placeholder="e.g., project management, public speaking, web development"
            rows={3}
            required
          />
        </div>
        <SubmitButton />
      </form>
      
      {state.suggestions && (
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline">Personalized Suggestions</CardTitle>
            <CardDescription>Based on your input, here are a few ways you could contribute:</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="whitespace-pre-wrap rounded-md bg-background/50 p-4 font-mono text-sm">
              {state.suggestions}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
