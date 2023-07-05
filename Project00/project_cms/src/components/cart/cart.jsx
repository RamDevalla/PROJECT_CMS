import { useCallback, useContext, useRef } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorpay from "react-razorpay";

const Cart = ()=>{

    const {cartData} = useContext(CartContext)
    const total = useRef();
    total.current.Pricing = 0;

    const Razorpay = useRazorpay();
    const razorpayDisplay = useCallback(async(total)=>{
            const options ={
                key : "rzp_test_kPv2FnWOAy2CBv",
                amount : total,
                currency : "INR",
                name : "Video-Game Site",
                description : "transaction",
                handler:(response)=>{
                    console.log(response)
                },
                prefill : {
                    name : "abcdddd",
                    email : "abc@gmail.com",
                    contact : 9848022338
                }
            }
            const rzp1 = new Razorpay(options);
            rzp1.open();
            
    }, [Razorpay])
    return(
        <>
                <div>
                    <section>
                        {cartData.map((cartItem)=>{
                            return(
                                <article>
                                        <img src="" alt="ima"/>
                                        <article>{cartItem.Title}</article>
                                        <article>{cartItem.Pricing}</article>
                                        <button> Remove from cart </button>
                                </article>

                            )
                        })}
                    </section>

                    <section>
                        <article> Billing Info</article>
                        {cartData.map((cart)=>{
                            total.current.Pricing = total.current.Pricing + cart.Pricing 
                            return(
                                <article> 
                                    <span>{cart.Title} </span>
                                    <span>{cart.Pricing} </span>
                                </article>
                            )
                        })}
                        <article> Total :{total.current.Pricing} </article>
                        <button onClick={()=>{razorpayDisplay(6000)}} > Checkout </button>
                    </section>
                </div>
        </>
    )
}

export default Cart;