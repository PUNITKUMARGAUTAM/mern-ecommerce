import { useEffect , useState } from "react";

const Cart = ({cart}) => {

    const [total , setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc , item) => acc + item.price, 0));
    } , [cart]);

    return (
        <div className="container mt-4">
            <h2>Your Cart</h2>
            <ul className="list-group">
                {cart.map((item , idx) => {
                    <li className="list-group-item d-flex justify-content-between" key={idx}>
                        {item.name} - ${item.price}
                    </li>
                })}
            </ul>
            <h4 className="mt-3">Total : {total}</h4>
            <button className="btn btn-success mt-2">Checkout</button>
        </div>
    )

}

export default Cart;