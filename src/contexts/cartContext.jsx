import React, { createContext, useState, useContext, useMemo } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newProduct) => {
    setItems((prevItems) => {
        const existingItem = prevItems.find(item => item._id === newProduct._id);
  
      if (existingItem) {
        return prevItems.map(item =>
          item._id === newProduct._id
            ? { ...item, amountInCart: item.amountInCart + newProduct.amountInCart }
            : item
        );
      } else {
        return [...prevItems, { ...newProduct }];
      }
    });
  };
  const amountPlus = (productId) => {
    setItems((prevItems) => {
      console.log("prevItems:",prevItems);
      return prevItems.map(item => {
        if (item._id === productId) {
          // בדיקה אם הכמות המוספת לא תחרוג מהמלאי
          if (item.amountInCart < item.quantity) {
            return { ...item, amountInCart: item.amountInCart + 1 };
          } else {
            // אם הכמות המקסימלית הגיעה, אין שינוי בכמות
            return item;
          }
        } else {
          return item;
        }
      });
    });
  };
  const amountMinus = (productId) => {
    setItems((prevItems) => {
      return prevItems
        .map(item => {
          if (item._id === productId) {
            // בדיקה אם הכמות גדולה מאפס, אחרת נשמור את הכמות על 0
            const newAmount = item.amountInCart - 1;
            return { ...item, amountInCart: newAmount > 0 ? newAmount : 0 };
          } else {
            return item;
          }
        })
        .filter(item => item.amountInCart > 0); // מסנן מוצרים עם כמות אפס
    });
  };
  const removeItem = (productId) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newAmountInCart) => {
    setItems((prevItems) =>
      prevItems.map(item =>
        item.id === productId ? { ...item, amountInCart: newAmountInCart } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = useMemo(() => items.reduce((sum, item) => sum + item.price * item.amountInCart, 0), [items]);

  return (
    <CartContext.Provider value={{ items, addItem, amountPlus,amountMinus, removeItem, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};



export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};