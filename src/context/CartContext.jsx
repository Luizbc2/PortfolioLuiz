import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getMappedListingById } from '../data/mappers';

const CartContext = createContext(null);
const STORAGE_KEY = 'nexus-cart';
const DEFAULT_COUPON = 'NEXUS10';
const STARTER_ITEM = 'listing-star-steam';

const getStoredCart = () => {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) return { items: [STARTER_ITEM], couponCode: '' };
  try {
    return JSON.parse(stored);
  } catch {
    return { items: [STARTER_ITEM], couponCode: '' };
  }
};

export const CartProvider = ({ children }) => {
  const [state, setState] = useState(getStoredCart);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const items = state.items.map((listingId) => getMappedListingById(listingId)).filter(Boolean);
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const promoSubtotal = items.reduce((sum, item) => sum + item.promotionalPrice, 0);
  const automaticSavings = Number((subtotal - promoSubtotal).toFixed(2));
  const couponDiscount = state.couponCode === DEFAULT_COUPON ? Number((promoSubtotal * 0.1).toFixed(2)) : 0;
  const total = Number((promoSubtotal - couponDiscount).toFixed(2));

  const value = useMemo(() => ({
    items,
    itemCount: items.length,
    subtotal,
    promoSubtotal,
    automaticSavings,
    couponCode: state.couponCode,
    couponDiscount,
    total,
    validCouponCode: DEFAULT_COUPON,
    addItem: (listingId) => setState((current) => current.items.includes(listingId) ? current : { ...current, items: [...current.items, listingId] }),
    removeItem: (listingId) => setState((current) => ({ ...current, items: current.items.filter((item) => item !== listingId) })),
    clearCart: () => setState({ items: [], couponCode: '' }),
    applyCoupon: (couponCode) => setState((current) => ({ ...current, couponCode: couponCode.trim().toUpperCase() })),
    isInCart: (listingId) => state.items.includes(listingId),
  }), [items, subtotal, promoSubtotal, automaticSavings, state.couponCode, couponDiscount, total, state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
};
