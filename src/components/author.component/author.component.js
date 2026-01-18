import classes from './author.module.css';
import { useNavigate } from "react-router-dom";
import { Loader } from "../loader.component/loader.component";

export const Author = (props) => {
    const { author } = props;
    const navigate = useNavigate();

    return (
        <div className={classes.container} onClick={() => navigate(`/authors/${author.id}`)}>
            <div className={classes.author_name}>{author.name}</div>
            <div className={classes.author_email}>{author.email}</div>
            <div className={classes.author_companyName}>Company Name: {author.companyName}</div>
        </div>
    )
}
