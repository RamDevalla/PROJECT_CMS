import { useContext } from 'react';
import './header.css';
import { CartContext } from '../../context/cart-context';
import { useNavigate } from 'react-router-dom';

const Header = ()=>{

    const {cartData} = useContext(CartContext);
    const navigate = useNavigate();
    return(
        <>
        <nav className="navbar">
            <section className="site-name">
                Video Game Site
            </section>

            <section onClick={()=>{navigate('/cart')}}>
                <span>{cartData.length}</span>
                <i className="icon fa fa-shopping-cart"  > </i>
            </section>
        </nav>
        </>
    )
}

export default Header;