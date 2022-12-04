import { Timestamp } from "firebase/firestore";
import Image from "next/image";
import { PostType } from "../types/PostType";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

const Post = ({
  name,
  email,
  message,
  image,
  timestamp,
  postUrl,
}: PostType) => {
  const formatTimestampToString = (timestamp: Timestamp) => {
    return `${new Date(timestamp.toDate()).toLocaleString()}`;
  };

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-xl">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            height={40}
            alt={name}
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {timestamp && formatTimestampToString(timestamp)}
            </p>
          </div>
        </div>

        <p className="pt-4">{message}</p>
      </div>

      {postUrl && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postUrl} alt={name} fill style={{ objectFit: "cover" }} />
        </div>
      )}

      <div className="flex justify-between items-center rounded-b-xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        
        <div className="inputIcon rounded-none">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>

      </div>
    </div>
  );
};

export default Post;
