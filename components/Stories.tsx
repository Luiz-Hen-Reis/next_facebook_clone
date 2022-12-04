import { stories } from "../utils/stories"
import StoryCard from "./StoryCard"

const Stories = () => {

  return (
    <div className="flex justify-center space-x-3 mx-auto">
        {stories.map((story) => (
            <StoryCard key={story.src} name={story.name} profile={story.profile} src={story.src}  />
        ))}
    </div>
  )
}

export default Stories