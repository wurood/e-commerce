import React from 'react'
import Tittle from '../Tittle'
import SubTittle from './../SubTittle'
import CategoryItem from '../CategoryItem'
function Category() {
    return (
        <div>
            <SubTittle text="Categories" />
            <Tittle text="Browse By Category" />
            <CategoryItem />
        </div>
    )
}

export default Category
