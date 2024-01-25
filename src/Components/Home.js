import pc3 from '../images/bc3.png'
import '../CSS/HomeCss.css'
import Products from '../Components/Products'
const Home =()=>{


return (
<>

<img src={pc3} alt='' className='coffy' />

<h1>
  Time To Discover<br/>
  Coffee House
</h1>

<Products />
</>
)

}

export default Home;