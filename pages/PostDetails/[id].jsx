import { useRouter } from 'next/router'
import ShowDetails from '../../components/ShowDetails'
import PostInfo from '../../utils/PostInfo'

const PostDetails = () => {
  const router = useRouter()  
  const postId = Number(router.query.id)

  const {postDetails, totalComments} = PostInfo(postId)
  
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
