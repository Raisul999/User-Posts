import { useSelector } from "react-redux"

 const CommentDetails = (id) => {
    // console.log(id)
    const { userPosts } = useSelector((state) => state.posts)

    let postDetails = userPosts?.filter((val) => val.post.id == id)

    let totalComments = {
        comments: []
    }

    for (let i = 0; i < userPosts.length; i++) {
        if (id == userPosts[i].comment[0].postId) {
            totalComments = {
                comments: userPosts[i].comment
            }
        }
    }

    return {postDetails,totalComments}
}

export default CommentDetails