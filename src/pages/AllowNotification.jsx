import { Link } from "react-router-dom";
import styles from "../styles/PhoneConfirmation.module.css";

function AllowNotification() {
  return (
    <div className={styles.PhoneConfirmationContainer}>
      <div className="text-center">
        <h2 className="mb-4">Last, important step!</h2>
        <h3 className="mb-3">
          Enable notifications to know when people are talking
        </h3>
        <div className={styles.notificationContainer}>
          <div className="p-3">
            <h3>"Clubhouse" Would Like to Send You Notifications</h3>
            <p>Notifications may include alerts, sounds, and icon </p>
          </div>
          <div className={styles.action_btn}>
            <Link to="/home">Don't Allow</Link>
            <Link to="/home">Allow</Link>
            <img src="/images/handIcon.jpg" alt="" className="handIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllowNotification;
