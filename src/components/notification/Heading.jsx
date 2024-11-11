import { Link } from "./Link"

export const Heading = ({name, title, time, unread, highlight, notificationType}) => {

  const unreadMarkerClass = unread ? "opacity-100 visible" : "opacity-0 invisible"

  return (
    <div className="flex flex-col gap-1 justify-center">
      <div className="space-x-[5px]">
        <Link>{name}</Link>
        <span className="text-dark-grey-blue">{title}</span>
        {highlight && <Link notificationType={notificationType}>{highlight}</Link>}
        <div className={`w-3 h-3 rounded-full bg-red inline-block transition-all duration-500 ${unreadMarkerClass}`}></div>
      </div>
      <p className="text-grey-blue text-sm">{time} ago</p>
    </div>
  )
}