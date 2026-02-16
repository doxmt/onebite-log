import { signInWithOAuth } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export function useSignInOAuth() {
  return useMutation({
    mutationFn: signInWithOAuth,
  });
}
