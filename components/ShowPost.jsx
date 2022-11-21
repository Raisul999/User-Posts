import { Card, Button, Modal, Row } from 'antd'
import { ExclamationCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { deletePost } from '../features/userPostsSlice'
import { useRouter } from 'next/router'
import CommentDetails from '../utils/Comments'

const ShowPost = ({ item }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const { confirm } = Modal
    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure delete this post?',
            icon: <ExclamationCircleOutlined />,
            content: '',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                dispatch(deletePost({ id: item.post.id }))
            },
            onCancel() {

            },
        });
    };
   
    const {totalComments} = CommentDetails(item.post.id)
    
    const toPageDetails = () => {
        router.push(`/PostDetails/${item.post.id}`)
    }

    return (
        <>
            <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Card
                    style={{ width: "50rem", margin: "2rem" }}
                >
                    
                    <h2 onClick={toPageDetails} style={{ cursor: "pointer" }}>{item.user.name}</h2>
                    <h3>{item.post.title}</h3>
                    <p>{item.post.body}</p>
                    <p>{totalComments.comments.length} comments</p>
                    
                    <Button onClick={showDeleteConfirm} type="primary" danger icon={<DeleteOutlined />} style={{ float: "right" }}></Button>
                </Card>
            </Row>

        </>
    )
}

export default ShowPost
