import { useState } from "react";
import styles from "../styles/PhoneConfirmation.module.css";

function PhoneConfirmation() {
  const [value, setValue] = useState("");
  return (
    <div className={styles.PhoneConfirmationContainer}>
      <h1>Enter your phone</h1>
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of Service and Privacy Policy. </span>
        Thanks!
      </p>
    </div>
  );
}

export default PhoneConfirmation;
