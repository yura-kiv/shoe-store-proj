import styles from "./styles/ActionBtn.module.css";
import { ReactComponent as Loader } from "../../assets/loader.svg";

export default function ActionBtn({
  handleSubmit,
  action = "submit",
  text,
  isLoading = false,
}) {
  return (
    <button
      type={action}
      className={styles.actionBtn}
      onSubmit={handleSubmit}
    >
      {isLoading ? <Loader /> : text}
    </button>
  );
}
