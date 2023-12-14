import { getOrders } from "../features/ordersSlice";
import styles from "./Orders.module.css"
import Order from "./Order";
import {  useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";



const Orders = () => {
    const dispatch = useDispatch()

    const orders = useSelector((state) => state.order.orders)
    useEffect(() =>{
        dispatch(getOrders())
    },[dispatch])
    return(
        <div className={styles.ord}>
            {orders.map((order) =>{
                return(
                    <Order
                      key={order._id}
                      id={order._id}
                      name={order.name}
                      phone={order.phone}
                      message={order.message}
                    />
                )
            })}
        </div>
       
    )
}
export default Orders


