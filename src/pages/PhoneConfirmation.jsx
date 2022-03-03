import { useState } from "react";
import styles from "../styles/PhoneConfirmation.module.css";

function PhoneConfirmation() {
  const [value, setValue] = useState("");
  return <div className={styles.PhoneConfirmationContainer} >PhoneConfirmation</div>;
}

export default PhoneConfirmation;
