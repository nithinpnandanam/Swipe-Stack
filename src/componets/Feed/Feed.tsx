import { userFeed } from "@/api/feed.api";
import { useEffect, useState } from "react";
import UserCard from "../UserCard/UserCard";
import { FeedUser } from "@/types/common_types";
import "./Feed.css";

const Feed = () => {
  const [feedData, setFeedData] = useState<FeedUser[] | null>(null);
  useEffect(() => {
    const _userFeed = async () => {
      try {
        const feedData = await userFeed();
        setFeedData(feedData.data.data);
      } catch (e) {
        console.log(e);
      }
    };

    _userFeed();
  }, []);

  if (!feedData || feedData.length === 0) return null;
  return (
    <>
      <div className="feed-container">
        {feedData.map((data, index) => {
          return <UserCard key={index} {...data} />;
        })}
      </div>
    </>
  );
};

export default Feed;
