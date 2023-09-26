import { useState } from "react";
import { signupFields } from "./assets/formFields";
import FormAction from "./ActionBtn";
import Input from "./Input";
import styles from "./styles/Signup.module.scss";
import ToastNotification from "../../toastNotification/toast";
import { useSignupMutation } from "../../toolkitRedux/api/userAuthApiSlice";
import { useNavigate } from "react-router-dom";

const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState({
    ...fieldsState,
    gender: "male",
  });
  const [signup, { isLoading }] = useSignupMutation();
  const navigate = useNavigate();

  const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupState);
    try {
      const response = await signup({ ...signupState }).unwrap();
      ToastNotification.success(response.msg);
      navigate("/login");
    } catch (err) {
      console.log(err);
      if (err.status === 400) {
        err.data?.errors
          ? err.data.errors.map((error) => {
              return ToastNotification.error(error.msg);
            })
          : console.log(err.data);
      } else if (!err?.originalStatus) {
        ToastNotification.error("No Server Response");
      }
    }
  };

  return (
    <form
      className={styles.formWrapper}
      onSubmit={handleSubmit}
    >
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <div
          className={styles.genderBtnsWrapper}
          onChange={handleChange}
        >
          <input
            type="radio"
            defaultChecked
            value="male"
            name="gender"
            id="gender"
          />
          <span>Men</span>
          <input
            type="radio"
            value="female"
            name="gender"
            id="gender"
          />
          <span>Woman</span>
        </div>
        <FormAction
          handleSubmit={handleSubmit}
          text="Signup"
        />
      </div>
    </form>
  );
}
