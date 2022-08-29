import "./NotificationPage.css"

export default function NotificationPage() {
  return (
    <div className="notificationPage">
      <h1>Notifications</h1>
      <div className="notificationBottom">
          <span>Hay there is a new member joined today named <b>salman</b></span>
          <img src= "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  className="notificationImg"/>
      </div>
      <div className="notificationBottom">
          <span>safi's Verification is <b>pending</b></span>
          <img src= "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="notificationImg" />
      </div>
    </div>
  )
}
