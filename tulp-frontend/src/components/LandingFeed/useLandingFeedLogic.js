import { useEffect, useState } from "react"
import { postAPI } from "../../core/api/post"

const usePostFeedLogic = () => {
  const [posts, setPosts] = useState([LoadingPost])
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await postAPI.get()
        setPosts(res.posts)
      } catch (e) {}
    }
    getPosts()
  }, [])

  return { posts, setPosts }
}

const LoadingPost = {
  _id: "none",
  user: {
    _id: "none",
    username: "Loading",
    imageUrl: "uploads/default.png",
  },
  likes: ["asdadas"],
  content: "Loading",
  comments: [
    {
      _id: "none",
      user: {
        _id: "none",
        username: "Loading",
        imageUrl: "uploads/default.png",
      },
      likes: ["asdadas"],
      content: "Loading",
    },
  ],
}

export default usePostFeedLogic
