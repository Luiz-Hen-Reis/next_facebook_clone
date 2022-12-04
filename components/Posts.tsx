import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firestore } from "../firebase";
import { PostType } from "../types/PostType";
import Post from "./Post";

type Props = {
  posts: PostType[];
};

const Posts = ({ posts }: Props) => {
  const [realTimePosts] = useCollection(
    query(collection(firestore, `posts`), orderBy("timestamp", "desc"))
  );

  return (
    <div>
      {realTimePosts
        ? realTimePosts.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              email={post.data().email}
              image={post.data().image}
              message={post.data().message}
              timestamp={post.data().timestamp}
              postUrl={post.data().postUrl}
            />
          ))
        : posts.map((post, index) => (
            <Post
              key={index}
              name={post.name}
              email={post.email}
              image={post.image}
              message={post.message}
              timestamp={post.timestamp}
              postUrl={post.postUrl}
            />
          ))}
    </div>
  );
};

export default Posts;
