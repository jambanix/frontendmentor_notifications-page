import { useEffect, useState } from "react"
import { Title } from "./Title"
import { Notification } from "./notification/Notification";

export const Card = () => {

  const [notifications, setNotifications] = useState([]);
  const unreadCount = notifications.filter(notification => notification.unread).length

  // load initial data
  useEffect(() => {
    fetch("data.json")
    .then(response => response.json())
    .then(data => setNotifications(data));
  }, []);

  const handleClick = (id) => {
    const target = notifications.find(notification => notification.id === id);
    const index = notifications.indexOf(target);
    const copy = notifications.filter(notification => notification.id !== id);
    const insertion = {
      ...target,
      unread: false
    };
    copy.splice(index, 0, insertion);
    setNotifications(prev => copy);
  }

  const handleMarkAllRead = () => {
    const targets = notifications.filter(notification => notification.unread);
    const [...index] = targets.map(target => notifications.indexOf(target));
    const copy = [...notifications]
    index.forEach(index => copy.at(index).unread = false);
    setNotifications(prev => copy);
  }

  return (
    <section className="bg-white rounded-lg px-4 py-5 w-[100%] sm:w-[90%] max-w-[730px] md:px-8 md:py-8 flex flex-col gap-6">
      <header className="flex justify-between">
        <Title unreadCount={unreadCount}/>
        <button className="bg-none outline-none text-dark-grey-blue hover:text-blue transition-colors" onClick={handleMarkAllRead}>Mark all as read</button>
      </header>
      
      <div className="flex flex-col gap-2">
      {notifications.map(notification => <Notification data={notification} key={notification.id} onClick={handleClick}/>)}
      </div>
    </section>
  )
}