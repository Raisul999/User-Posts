import { Card, Row } from 'antd'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const ShowDetails = ({ postDetails, totalComments }) => {

    const router = useRouter()

    return (
        <>
            {postDetails.length > 0 ? <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                className={styles.row}
            >
                <Card
                    className={styles.cardSize}

                >
                    <h2 onClick={() => router.push('/')}>{postDetails[0]?.user.name}</h2>
                    <h3>{postDetails[0]?.post.title}</h3>
                    <p>{postDetails[0]?.post.body}</p>

                    <div className={styles.left}>
                        <h3>Comments</h3>
                        {totalComments.comments.map((item, i) =>
                            <div key={i}>
                                <h4>{item.name}</h4>
                                <p>{item.body}</p>
                            </div>
                        )}
                    </div>

                </Card>
            </Row> : <div className={styles.textCenter}>
                <h2>Post Details Not Available</h2>

            </div>}


        </>
    )
}

export default ShowDetails
