import { useEffect, useState } from "react";
import classes from './allAuthors.module.css';
import { Loader } from "../loader.component/loader.component";
import { getAuthors } from "../../services/blogService";
import { Author } from "../author.component/author.component";

export const AllAuthorsComponent = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        setIsLoaded(false);
        getAuthors()
            .then(async (data) => {
                setAuthors(data);
                setIsLoaded(true);
            });
    }, []);

    if (isLoaded == false) {
        return <><Loader /></>;
    }
    return (<div className={classes.authors}>
        {
            authors.map(author => {
                return <Author key={`author-${author.id}`} author={author} />;
            })
        }
    </div>);
}