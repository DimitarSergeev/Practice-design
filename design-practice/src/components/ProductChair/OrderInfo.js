import styles from './ProductChair.module.css'

import { useEffect, useState } from 'react'


export const OrderInfo = ({ onePicePrice, setOrderData }) => {

    const [pices, setPices] = useState(1)
    const [color, setColor] = useState('Yellow')
    const pickColor = (e) => {
        setColor(color => color = e.target.value)
    }
    useEffect(() => {
        setOrderData({
            pices: pices,
            color: color,
            totlaPrice: pices * onePicePrice
        })
    }, [pices,color,onePicePrice,setOrderData])

    
    return (
        <div className={styles['order-info']}>
            <div className={styles['order-container']}>
                <label htmlFor="color">COLOR</label>
                <div className={styles['color-container']}>
                    <span className={styles.color}></span>
                    <select name="color" id="color" onChange={pickColor}>
                        <option
                            value="yellow"
                            style={{ "background": "#ffff00" }}
                        >
                        </option>

                        <option
                            value="green"
                            style={{ "background": "#00ff00" }}
                        >
                        </option>

                        <option
                            value="red"
                            style={{ "background": "#ff0000" }}
                        >
                        </option>
                    </select>
                </div>
            </div>
            <div className={styles['order-container']}>
                <label htmlFor="quant">QUANTITY</label>
                <div className={styles['quantity-container']} id='quant'>
                    <button
                        className={styles['quantity-btn']}
                        onClick={() => ( pices > 1 ? setPices(pices - 1) : '' )}
                    >
                        -
                    </button>
                    <p className={styles.pices}>
                        {pices}
                    </p>
                    <button
                        className={styles['quantity-btn']}
                        onClick={() => setPices(pices + 1)}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className={styles['order-container']}>
                <label htmlFor="totlaPrice">TOTAL PRICE</label>
                <div className={styles['total-container']}>
                    <span
                        className={styles['total-price']}
                        id='totalPrice'
                    >
                        ${pices * onePicePrice}
                    </span>
                </div>
            </div>
        </div>
    )
}