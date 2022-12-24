import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory-item.styles.jsx";

export default function DirectoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer to={"/shop/" + title}>
      <BackgroundImage
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
}
