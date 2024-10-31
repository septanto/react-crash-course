import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css'

function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Siprianus" body="React.js is awesome" />
                <Post author="Nugroho" body="Shiba Inu is awesome" />
            </ul>
        </>
    )
}

export default PostsList;