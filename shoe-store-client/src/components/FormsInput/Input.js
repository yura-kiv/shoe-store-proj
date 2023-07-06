import styles from "./styles/Input.module.scss";

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
}) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        placeholder={placeholder}
      />
    </div>
  );
}
