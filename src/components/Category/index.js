import React from 'react'
import Tittle from './../Tittle/index'
import SubTittle from './../SubTittle/index'
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
