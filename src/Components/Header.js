import '../CSS/HeaderCss.css'
import th from '../images/th.jpeg'
import { Link } from 'react-router-dom';
const Header = () => {



    return (

        <>
            <div >

                <ul className="all">
                    <div><img src={th} alt='' /></div>
                    <div className="header" >
                        <li>HOME</li>
                        < li> <Link className='mylink' to='/Fav' >FAV   </Link></li>
                        <li>ORDERS</li>
                    </div>




                </ul>


            </div>

        </>
    )
}

export default Header;