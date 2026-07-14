"use client";

import { TweetProps, useTweet } from "react-tweet";

import { MagicTweet, TweetNotFound, TweetSkeleton } from "@/components/ui/tweet-card";

const ClientTweetCard = ({
  id,
  apiUrl,
  fallback,
  components,
  fetchOptions,
  onError,
  className,
  ...props
}: TweetProps & { className?: string }) => {
  const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions);

  if (isLoading) return fallback ?? <TweetSkeleton className={className} />;
  if (error || !data) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return (
      <NotFound
        className={className}
        error={onError ? onError(error) : error}
      />
    );
  }

  return (
    <MagicTweet
      tweet={data}
      components={components}
      className={className}
      {...props}
    />
  );
};

export default ClientTweetCard;
