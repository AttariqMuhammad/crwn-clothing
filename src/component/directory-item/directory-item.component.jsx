import "./directory-item.styles.scss";
import { Link } from "react-router-dom";

export default function DirectoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <Link to={"/shop/" + title} className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </Link>
  );
}
