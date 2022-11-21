import { Card, Row } from 'antd'


const ShowDetails = ({ postDetails, totalComments }) => {


    return (
        <div>
            {postDetails.length > 0 ? <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Card
                    style={{ width: "50rem", margin: "2rem" }}

                >
                    <h2>{postDetails[0]?.user.name}</h2>
                    <h3>{postDetails[0]?.post.title}</h3>
                    <p>{postDetails[0]?.post.body}</p>
                    
                    <div style={{ marginLeft: ".5rem" }}>
                        <h3>Comments</h3>
                        {totalComments.comments.map((item, i) =>
                            <div key={i}>
                                <h4>{item.name}</h4>
                                <p>{item.body}</p>
                            </div>
                        )}
                    </div>

                </Card>
            </Row> : <div style={{ textAlign: "center", margin: "5rem" }}>
                <h2>Post Details Not Available</h2>

            </div>}


        </div >
    )
}

export default ShowDetails
