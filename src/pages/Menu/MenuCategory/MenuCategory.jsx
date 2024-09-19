import React from 'react'
import Cover from '../../Home/Cover/Cover'
import MenuItem from '../../Shared/MenuItem/MenuItem'
import { Link } from 'react-router-dom'

const MenuCategory = ({ items, title, coverImage }) => {
    return (
        <div>
            {title && <Cover img={coverImage} title={title} description={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`} height={"600"} ></Cover>
            }
            <div className="grid md:grid-cols-2 gap-14 px-24 mt-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className="flex justify-center items-center mb-16 mt-12">
                    <button className="btn btn-outline border-0 border-b-4 ">
                        ORDER YOUR FAVOURITE FOOD
                    </button>
                </div>
            </Link>


        </div>
    )
}

export default MenuCategory
