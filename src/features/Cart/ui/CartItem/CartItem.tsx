import React, { FC } from "react"
import style from './CartItem.module.css'
import Counter from "../../../../shared/ui/Counter/Counter"
import Button from "../../../../shared/ui/Button/Button"
import { useTranslation } from "react-i18next"

type CartItemProps = Pick<Product, 'price' | 'photo' | 'name'> & {
    count: number,
}

const CartItem: FC<CartItemProps> = ({ name, count, photo, price }) => {
    const {t}= useTranslation();

    return (
        <>
            <div className={style.wrapper}>
                <div className={style.imageWrapper}>
                    <img className={style.image} src={photo} alt={t('product.photo',{name})} />
                </div>
                <div className={style.infoWrapper}>
                    <div className={style.title}>{name}</div>
                </div>
                <div className={style.cartWrapper}>
                    <div className={style.counter}>
                        <Counter count={count} />
                    </div>
                    <div className={style.price}>{t('product.price',{price: count * price})}</div>
                    {/* <div className={style.price}>{(count * price).toFixed(2)}&nbsp;руб.</div> */}
                    <div className={style.removeWrapper}>
                        <Button className={style.remove} lable={t("CartItem.button")} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem