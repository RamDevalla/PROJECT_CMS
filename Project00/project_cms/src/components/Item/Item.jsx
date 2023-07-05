import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

const Item = ({item})=>{

    const {addCartData} = useContext(CartContext);

    return(
        <>
        
        <div className="card">
            <img className="card-image" src={item.Images} alt="images" />
            <article className="card-title"> {item.Title} </article>
            <article className="card-description"> {item.Description} </article>

            <section className="card-footer">
                <article className="card-price"> ${item.Pricing} </article>
                <button className="card-button" onClick={(item)=>{addCartData(item)}} >Add to cart </button>
            </section>

        </div>
        </>
    )
}

export default Item;