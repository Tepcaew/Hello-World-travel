import styles from "./Orders.module.css"


const Order = ({name, phone, message}) =>{
    return(
        <div className={styles.orderTable}>
            <table>
        <tr>
          <th>имя</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>номер телефона</th>
          <td>{phone}</td>
        </tr>
        <tr>
          <th>сообщение</th>
          <td>{message}</td>
        </tr>
      </table>
        </div>
    )
}

export default Order