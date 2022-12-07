import CategoryItem from "../CategoryItem/CategoryItem.component"

import './Directory.styles.scss'

export default function Directory({categories}){
    return(
        <div className="directory-container">
            {categories.map((category)=>(
                <CategoryItem key={category.id} category={category} />
       
            ))}
        </div>
    )
}