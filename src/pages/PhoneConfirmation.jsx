import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
import styles from "../styles/PhoneConfirmation.module.css";

function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={styles.PhoneConfirmationContainer}>
      <Link to="/" className={styles.backBtn}>
        <img
          className={styles.imageTransform}
          src="/images/next-arrow-back.png"
          alt=""
        />{" "}
        Back
      </Link>
      <h1>Enter your phone</h1>
      <PhoneInput
        className="my-3"
        international
        defaultCountry="US"
        value={value}
        onChange={setValue}
      />
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of Service and Privacy Policy. </span>
        Thanks!
      </p>
      <Link
        to="/code_confirm"
        className="primaryBtn d-flex align-items-center mt-4"
      >
        Next <img src="/images/next-arrow-back.png" className="ml-1" alt="" />
      </Link>
    </div>
  );
}

export default PhoneConfirmation;
