import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
//import { useCreateCommentMutation } from "./use-comments-hooks";
import { toast } from "sonner";
import { useCreateCommentMutationOptimistic } from "./use-comments-hooks-optimistic";

export function CommentForm() {
  const [commentText, setCommentText] = useState("");

  //const mutation = useCreateCommentMutation();
  const mutationOptimistic = useCreateCommentMutationOptimistic();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!commentText.trim()) return;

    mutationOptimistic.mutate(
      { text: commentText },
      {
        onSuccess: () => {
          setCommentText("");
          toast.success("Comment posted successfully!");
        },
        onError: () => {
          toast.error("Failed to post comment. Please try again.");
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment..."
        className="flex-1"
        disabled={mutationOptimistic.isPending}
      />
      <Button
        type="submit"
        disabled={!commentText.trim() || mutationOptimistic.isPending}
      >
        {mutationOptimistic.isPending ? "Posting..." : "Post"}
      </Button>
    </form>
  );
}
