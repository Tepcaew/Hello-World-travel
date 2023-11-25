import styles from "./Orders.module.css"


const Order = ({name, phone, message}) =>{
    return(
        <div className={styles.container}>
        <div className={styles.orderTable}>
                        <div className={styles.infoOrd}>
                            <div>
                        <h4>имя</h4>
                            <p >{name}</p>
                            <h4>телефон</h4>
                            <p >{phone}</p>
                            <h4>сообщение</h4>
                            <p >{message}</p>
                            </div>
                            
                        </div>
                    </div>

        </div>
    )
}

export default Order