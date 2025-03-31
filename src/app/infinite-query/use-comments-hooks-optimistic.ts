import { postData } from "@/lib/fetch-utils";
import {
  QueryKey,
  useMutation,
  useQueryClient,
  InfiniteData,
} from "@tanstack/react-query";
import { CommentsResponse } from "../api/comments/route";
import { Comment } from "../api/comments/data";

const queryKey: QueryKey = ["comments"];
export function useCreateCommentMutationOptimistic() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newComment: { text: string }) =>
      postData<{ comment: Comment }>("/api/comments", newComment),
    onMutate: async (newCommentData) => {
      await queryClient.cancelQueries({ queryKey });
      const previousData =
        queryClient.getQueryData<
          InfiniteData<CommentsResponse, number | undefined>
        >(queryKey);
      const optimisticComment: Comment = {
        id: Date.now(),
        text: newCommentData.text,
        user: {
          name: "Current User",
          avatar: "CU",
        },
        createdAt: new Date().toISOString(),
      };
      queryClient.setQueryData<
        InfiniteData<CommentsResponse, number | undefined>
      >(queryKey, (oldData) => {
        const firstPage = oldData?.pages[0];
        if (firstPage) {
          return {
            ...oldData,
            pages: [
              {
                ...firstPage,
                comments: [optimisticComment, ...firstPage.comments],
                totalComments: firstPage.totalComments + 1,
              },
              ...oldData.pages.slice(1),
            ],
          };
        }
      });
      return { previousData };
    },
    onError: (error, newCommentData, context) => {
      queryClient.setQueryData<
        InfiniteData<CommentsResponse, number | undefined>
      >(queryKey, context?.previousData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
}
