import Header from "../components/FormsInput/Header";
import Signup from "../components/FormsInput/Signup";
import styles from "./styles/SignupPage.module.scss";

export default function SignupPage() {
  return (
    <div className={styles.signupPageMainWrapper}>
      <div className={styles.signupPageWrapper}>
        <Header
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
        />
        <Signup />
      </div>
    </div>
  );
}
