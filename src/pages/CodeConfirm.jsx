import { Link } from "react-router-dom";
import styles from "../styles/PhoneConfirmation.module.css";

function CodeConfirm() {
  return (
    <div className={styles.PhoneConfirmationContainer}>
      <Link to="/get_username" className={styles.backBtn}>
        <img
          className={styles.imageTransform}
          src="/images/next-arrow-back.png"
          alt=""
        />{" "}
        Back
      </Link>
      <div className="text-center">
        <h2 style={{ width: "100%", maxWidth: "200px", marginBottom: "1em" }}>
          Enter the code we just texted you!
        </h2>
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            padding: "5px 10px",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        />
        <p className="mt-3">
          Didn't receive it?{" "}
          <span style={{ fontWeight: "bolder", fontStyle: "italic" }}>
            Tap to resend.
          </span>
        </p>
      </div>
      <Link
        to="/allow_notification"
        className="primaryBtn d-flex align-items-center mt-3"
      >
        Next <img src="/images/next-arrow-back.png" className="ml-1" alt="" />
      </Link>
    </div>
  );
}

export default CodeConfirm;
