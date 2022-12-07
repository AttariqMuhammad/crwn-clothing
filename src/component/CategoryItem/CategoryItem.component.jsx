import './CategoryItem.styles.scss';
import { Link } from 'react-router-dom';


export default function CategoryItem ({category}){
    const { imageUrl, title }= category;
    return(
        <Link to={'/'+title} className="category-container">
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p >Shop now</p>
            </div>
        </Link>
    )
}