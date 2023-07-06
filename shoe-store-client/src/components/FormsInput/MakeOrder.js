import { useState } from "react";
import { makeOrderFields } from "./assets/formFields";
import FormAction from "./ActionBtn";
import Input from "./Input";
import styles from "./styles/MakeOrder.module.scss";
import ToastNotification from "../../toastNotification/toast";
import { useMakeOrderMutation } from "../../toolkitRedux/api/userAuthApiSlice";
import { useSelector, useDispatch } from "react-redux";
import { updateCartToInitialState } from "../../toolkitRedux/cartSlice";

const fields = makeOrderFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const getProductsInf = (products) => {
  const productsInf = [];
  products.map((product) => {
    productsInf.push({
      size: product.activeSize,
      color: product.activeColor,
      id: product._id,
      name: product.name,
    });
  });
  return productsInf;
};

export default function MakeOrder() {
  const [orderUserState, setOrderUserState] = useState(fieldsState);
  const [makeOrder, { isLoading }] = useMakeOrderMutation();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartSlice);

  const handleChange = (e) =>
    setOrderUserState({ ...orderUserState, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cartState.cartCount === 0) {
      ToastNotification.warn("Cart is empty...");
      return;
    }
    try {
      const response = await makeOrder({
        cart: getProductsInf(cartState.cart),
        ...orderUserState,
      }).unwrap();
      dispatch(updateCartToInitialState());
      setOrderUserState(fieldsState);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className={styles.formWrapper}
      onSubmit={handleSubmit}
    >
      {fields.map((field) => (
        <Input
          key={field.id}
          handleChange={handleChange}
          value={orderUserState[field.id]}
          labelText={field.labelText}
          labelFor={field.labelFor}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
        />
      ))}
      <FormAction
        handleSubmit={handleSubmit}
        text="Make order"
      />
    </form>
  );
}
