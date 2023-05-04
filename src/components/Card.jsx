import { NavLink } from "react-router-dom";

const Card = (props) => {
    const { id, image, site, summary, title, date } = props;
    return (
        <div className='card'>
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <span>{site}</span>
            <p>
                {summary}
            </p>
            <span>{date}</span>
            <NavLink to={`/home/news/${id}`}>
                Read more
            </NavLink>
        </div>
    )
}

export default Card