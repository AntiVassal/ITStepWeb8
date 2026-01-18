import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from './allPostsByAuthor.module.css';
import { Loader } from "../loader.component/loader.component";
import { Post } from "../post.component/post.component";
import { getPostsByAuthorId } from "../../services/blogService";

export const AllPostsByAuthorComponent = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setPosts] = useState([]);
    const { authorId } = useParams();
    useEffect(() => {
        setIsLoaded(false);
        getPostsByAuthorId(authorId)
            .then(async (data) => {
                setPosts(data);
                setIsLoaded(true);
            });
    }, []);

    if (isLoaded == false) {
        return <><Loader /></>;
    }

    return (<div className={classes.posts}>
                {
                    post.map(post => {
                        return <Post key={`post-${post.id}`} {...post} />;
                    })
                }
            </div>)
}