import Sectiontitle from "../../../components/SectionTitle/Sectiontitle"
import MenuItem from "../../Shared/MenuItem/MenuItem"
import useMenu from "../../../hooks/useMenu"

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setmenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category === 'popular')
    //             setmenu(popularItem)
    //         })
    // }, [])

    return (
        <section className="mb-24 px-5">
            <Sectiontitle
                subHeading={"Check it out"}
                heading={"From Our menu"}>
            </Sectiontitle>
            <div className="grid md:grid-cols-2 gap-14">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Menu</button>

        </section>
    )
}

export default PopularMenu
