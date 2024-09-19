const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="max-w-sm bg-white shadow-md overflow-hidden m-4 bg-base-200 relative">
            <div className="relative">
                <img className="w-full h-48 object-cover" src={image} alt={name} />
                {/* Price tag in the top-right corner */}
                <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-sm rounded">
                    ${price}
                </div>
            </div>
            <div className="py-7">
                <h2 className="text-lg font-semibold mb-2">{name}</h2>
                <p className="text-gray-600 mb-6">{recipe}</p>
                <button className="w-[156px] text-yellow-600 hover:text-yellow-500 bg-base-200 py-2 px-4 rounded transition duration-300 border-b-2 border-yellow-600 hover:bg-gray-900 hover:border-gray-900">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default FoodCard;
