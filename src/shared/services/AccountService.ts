import { AccountServiceInterface, Discounts } from '../types/accountService';

export const createAccountService = (db: Discounts): AccountServiceInterface => ({
  setGeneralDiscount: (userType, discount) => {
    if (discount < 0 || discount > 100) throw new Error('Discount must be between 0 and 100');
    db.discounts[userType].general = discount;
    return db;
  },

  setProductDiscount: (userType, productType, discount) => {
    if (discount < 0 || discount > 100) throw new Error('Discount must be between 0 and 100');
    db.discounts[userType].productSpecific[productType] = discount;
    return db;
  },

  getFinalDiscount: (userType, productType) => {
    const { general, productSpecific } = db.discounts[userType];
    const productDiscount = productSpecific[productType] || 0;
    return Math.min(general + productDiscount, 100);
  },
});
