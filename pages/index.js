import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts, reset } from '../features/userPostsSlice'
import { useEffect } from 'react'
import ShowPost from '../components/ShowPost'
import Spinner from '../components/Spinner/Spinner'
import styles from '../styles/Home.module.css'

const Home = () => {
  const dispatch = useDispatch()
  const { userPosts, isLoading, isError, message } = useSelector((state) => state.posts)


  useEffect(() => {
    if (userPosts.length > 0) return

    dispatch(fetchPosts())

  }, [dispatch])

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <div className={styles.textCenter}>
      <h2>{message}</h2>
      <Button
        className={styles.mar}
        type="primary"
        danger
        onClick={() => dispatch(reset())}
      >
        Reset
      </Button>
    </div>
  }


  return (
    <>
      <div>
        {userPosts?.length > 0 ? <div>
          {
            userPosts.map((item, idx) =>
              <ShowPost
                key={idx}
                item={item}
              />
            )
          }
        </div> : <div className={styles.textCenter} >
          <h2>No posts available</h2>
          <Button
            className={styles.mar}
            type="primary"
            danger
            onClick={() => window.location.reload()}
          >
            Load Posts
          </Button>
        </div>}
      </div>
    </>
  )
}

export default Home
