import { useEffect, useState } from "react"
import { Title } from "./Title"
import { Notification } from "./notification/Notification";

export const Card = () => {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("data.json")
    .then(response => response.json())
    .then(data => setNotifications(data));

  console.log(notifications);
  }, []);

  return (
    <section className="bg-white rounded-lg px-4 py-5 w-[90%] max-w-[730px] md:px-8 md:py-8 flex flex-col gap-6">
      <header className="flex justify-between">
        <Title unreadCount={0}/>
        <button className="bg-none outline-none text-dark-grey-blue">Mark all as read</button>
      </header>
      
      <div className="flex flex-col gap-2">
      {notifications.map(notification => {
        return <Notification data={notification}/>
      })}
      </div>
    </section>
  )
}