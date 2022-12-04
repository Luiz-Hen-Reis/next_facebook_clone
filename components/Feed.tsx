import { PostType } from "../types/PostType";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

type Props = {
  posts: PostType[];
};

const Feed = ({ posts }: Props) => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export default Feed;
