import { useEffect, useState } from "react"
import Sectiontitle from "../../../components/SectionTitle/Sectiontitle"
import MenuItem from "../../Shared/MenuItem/MenuItem"

const PopularMenu = () => {
    const [menu, setmenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular')
                setmenu(popularItem)
            })
    }, [])

    return (
        <section className="mb-24 px-5">
            <Sectiontitle
                subHeading={"Check it out"}
                heading={"From Our menu"}>
            </Sectiontitle>
            <div className="grid md:grid-cols-2 gap-14">
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>

        </section>
    )
}

export default PopularMenu
