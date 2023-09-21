import Event from './Event'

let recipeData = [
  {
    name:'Chicken Tikka Masala', imgLink: 'https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG', origin: 'Indian', website: 'https://cafedelites.com/chicken-tikka-masala/'
  }, {
    name: 'Cheesecake', imgLink: 'https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg', 
    origin: 'Greece', website: 'https://sugarspunrun.com/best-cheesecake-recipe/',
  }, {
    name: 'Fetticune Alfredo', imgLink: 'https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1-1200x1182.jpg', 
    origin: 'Italy', website: 'https://www.modernhoney.com/fettuccine-alfredo/',
  }, {
    name: 'Poke', imgLink: 'https://hips.hearstapps.com/hmg-prod/images/poke-bowl-221-1550260964.jpg?crop=0.8894117647058823xw:1xh;center,top&resize=1200:*', 
    origin: 'Hawaii', website: 'https://www.allrecipes.com/recipe/12870/ahi-poke-basic/',
  }, {
    name: 'Fried Chicken', imgLink: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR-_02_03_11b.jpg', 
    origin: 'New York', website: 'https://www.thecountrycook.net/the-best-southern-fried-chicken/',
  }, {
    name: 'Fried Rice', imgLink: 'https://www.seriouseats.com/thmb/BJjCEDw9OZe95hpZxmNcD3rJnHo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230529-SEA-EggFriedRice-AmandaSuarez-hero-c8d95fbf69314b318bc279159f582882.jpg', 
    origin: 'China', website: 'https://www.gimmesomeoven.com/fried-rice-recipe/',
  }, {
    name: 'Spaghetti', imgLink: 'https://www.mashed.com/img/gallery/where-spaghetti-was-actually-invented/l-intro-1641327071.jpg', 
    origin: 'Italy', website: 'https://www.inspiredtaste.net/38940/spaghetti-with-meat-sauce-recipe/',
  }, {
    name: 'Pizza', imgLink: 'https://sipbitego.com/wp-content/uploads/2021/08/Pepperoni-Pizza-Recipe-Sip-Bite-Go.jpg', 
    origin: 'Italy', website: 'https://thefoodcharlatan.com/homemade-pizza-recipe/',
  }, {
    name: 'Ice Cream', imgLink: 'https://barefeetinthekitchen.com/wp-content/uploads/2018/05/Easiest-Ice-Cream-1-1-of-1-2048x1463.jpg', 
    origin: 'China', website: 'https://barefeetinthekitchen.com/homemade-ice-cream-recipe/',
  }, {
    name: 'Philly Cheesesteak', imgLink: 'https://hips.hearstapps.com/hmg-prod/images/philly-cheesesteak-index-64de7f154d853.jpg?crop=0.502xw:1.00xh;0.0112xw,0&resize=1200:*', 
    origin: 'Philadelphia', website: 'https://www.delish.com/cooking/recipe-ideas/recipes/a54006/easy-homemade-philly-cheesesteak-recipe/',
  }
]


const Recipe = () => {
  return (
    <div className="recipeGrid">
      
      {recipeData.map((food, index) => (
        <Event
          key={index}
          name={food.name}
          imgLink={food.imgLink}
          origin={food.origin}
          website={food.website}
        />
      ))}
    </div>
  )
}

export default Recipe;