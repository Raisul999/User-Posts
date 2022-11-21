import { useRouter } from 'next/router'
import ShowDetails from '../../components/ShowDetails'
import CommentDetails from '../../utils/Comments'

const PostDetails = () => {
  const router = useRouter()  
  const postId = Number(router.query.id)

  let results = CommentDetails(postId)
  let postDetails = results.postDetails
  let postComments = results.totalComments
  
 

  return (
    <div>
      <ShowDetails
        postComments={postComments}
        postDetails={postDetails}
      />
    </div>
  )
}

export default PostDetails
