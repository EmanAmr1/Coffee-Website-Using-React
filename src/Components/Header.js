import '../CSS/HeaderCss.css'
import th from '../images/th.jpeg'
const Header = () => {


    return (

        <>
            <div >

                <ul className="all">
                    <div><img src={th} alt=''/></div>
                    <div className="header" >
                        <li>HOME</li>
                        <li>FAV</li>
                        <li>ORDERS</li>
                    </div>




                </ul>


            </div>

        </>
    )
}

export default Header;