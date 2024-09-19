import { useEffect, useState } from "react";
import Sectiontitle from "../../../components/SectionTitle/Sectiontitle";

const ChefRecommend = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
            });
    }, []);

    return (
        <section>
            <Sectiontitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            ></Sectiontitle>

            <div className="grid md:grid-cols-3 gap-6 text-center mx-10 mb-24">
                {
                    // Slice to show only the first 3 items
                    menu.slice(0, 3).map(item => (
                        <div
                            key={item._id}
                            className="max-w-sm bg-white shadow-md overflow-hidden m-4 bg-base-200"
                        >
                            <img className="w-full h-48 object-cover" src={item.image} alt={item.name} />
                            <div className="py-7">
                                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                                <p className="text-gray-600 mb-6">{item.recipe}</p>
                                <button className="w-[156px] text-yellow-600 bg-base-300 py-2 px-4 rounded transition duration-300 border-b-2 border-yellow-600 hover:bg-gray-900 hover:border-gray-900">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default ChefRecommend;
