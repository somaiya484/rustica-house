import { Helmet } from 'react-helmet-async';
import menuCoverImg from '../../../assets/menu/banner3.jpg'
import Cover from '../../Home/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import Sectiontitle from '../../../components/SectionTitle/Sectiontitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzsImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');

  return (
    <div>
      <Helmet><title>Rustica House | Menu</title></Helmet>

      <Cover img={menuCoverImg} title={"OUR MENU"} description={`WOULD YOU LIKE TO TRY A DISH?`} height={"600"}></Cover>
      <Sectiontitle heading={"Don't Miss"} subHeading={"Today's Offer"}></Sectiontitle>

      {/* offered menu */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert */}
      <MenuCategory items={desserts} title="dessert" coverImage={dessertImg} height={"400"}></MenuCategory>

      {/* Pizza */}
      <MenuCategory items={pizza} title="pizza" coverImage={pizzsImage} height={"400"}></MenuCategory>

      {/* Salad */}
      <MenuCategory items={salad} title="salad" coverImage={saladImage} height={"400"}></MenuCategory>

      {/* Soup */}
      <MenuCategory items={soup} title="soup" coverImage={soupImage} height={"400"}></MenuCategory>
    </div>
  )
}

export default Menu
