import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./Directory.styles";

export default function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
}
