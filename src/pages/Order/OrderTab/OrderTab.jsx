import FoodCard from "../../../components/FoodCard/FoodCard"

const OrderTab = ({items}) => {
  return (
    <div className='grid md:grid-cols-3 gap-6 text-center mx-10 mb-24'>
    {
        items.map(item => <FoodCard
            key={item._id}
            item={item}
        ></FoodCard>)
    }
</div>
  )
}

export default OrderTab
