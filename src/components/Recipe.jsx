import Event from './Event'

let recipeData = [
  {
    name:'Chicken Tikka Masala', imgLink: 'https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG', origin: 'Indian', website: 'https://cafedelites.com/chicken-tikka-masala/'
  }, {
    name: 'Cheesecake', imgLink: 'https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg', 
    origin: 'Greece', website: 'https://sugarspunrun.com/best-cheesecake-recipe/',
  }, {
    name: '', imgLink: '', 
    origin: '', website: '',
  }, {
    name: '', imgLink: '', 
    origin: '', website: '',
  }, {
    name: '', imgLink: '', 
    origin: '', website: '',
  }, {
    name: '', imgLink: '', 
    origin: '', website: '',
  }, {
    name: '', imgLink: '', 
    origin: '', website: '',
  }, {
    name: '', imgLink: '', 
    origin: '', website: '',
  }, {
    name: '', imgLink: '', 
    origin: '', website: '',
  }, {
    name: '', imgLink: '', 
    origin: '', website: '',
  }
]


const Recipe = () => {
  let addToGrid = '';
  recipeData.forEach( (food) => {
    const { name, imgLink, origin, website } = food
    addToGrid += `
    <Event name=${name} imgLink=${imgLink} 
    origin=${origin} website=${website}
    
    />`
  })
  console.log(addToGrid)

  return (
    <div className="recipeGrid">
      {addToGrid}
    </div>

  )

}

export default Recipe;