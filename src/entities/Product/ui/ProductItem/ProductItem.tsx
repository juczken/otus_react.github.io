import React, { FC, useState } from 'react';
import cn from 'clsx';
import style from './ProductItem.module.css';
import CartButton from '../../../../features/Cart/ui/CartButton/CartButton';
import cutStringHelper from '../../../../shared/lib/cutStringHelper';
import { useTranslation } from 'react-i18next';

type ProductItemProps = Pick<Product, 'price' | 'photo' | 'name' | 'desc'>;

const ProductItem: FC<ProductItemProps> = ({ price, photo, name, desc }) => {
  const { t } = useTranslation();
  return (
    <div className={cn(style.wrapper)}>
      <div>
        <img className={cn(style.image)} src={photo} alt={t('product.photo',{name})} />
      </div>
      <div className={cn(style.title)}>
        <h3>{name}</h3>
      </div>
      <div className={cn(style.price)}>
        <span>{t('product.price',{price})}</span>
      </div>
      <div className={cn(style.description)}>
        <p>{cutStringHelper(desc, 100) || t('product.description_undefined')}</p>
      </div>
      <div className={cn(style.button)}>
        <CartButton count={0} />
      </div>
    </div>
  );
};

export default ProductItem