import { useRouter } from 'next/router'
import ShowDetails from '../../components/ShowDetails'
import CommentDetails from '../../utils/Comments'

const PostDetails = () => {
  const router = useRouter()  
  const postId = Number(router.query.id)

  const {postDetails, totalComments} = CommentDetails(postId)
  
  return (
    <div>
      <ShowDetails
        postDetails={postDetails}
        totalComments={totalComments}
      />
    </div>
  )
}

export default PostDetails
