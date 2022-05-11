import "./notificationPage.css"
import sac from "../userList/a.jpg"
import sav from "./b (1).jpg"

export default function NotificationPage() {
  return (
    <div className="notificationPage">
      <h1>Notifications</h1>
      <div className="notificationBottom">
          <span>Hay there is a new member joined today named <b>salman</b></span>
          <img src={sac} alt=""  className="notificationImg"/>
      </div>
      <div className="notificationBottom">
          <span>safi's Verification is <b>bending</b></span>
          <img src={sav} alt="" className="notificationImg" />
      </div>
    </div>
  )
}
