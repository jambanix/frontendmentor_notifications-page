
export const Heading = ({name, title, time, unread, highlight, highlightClassName=null}) => {

  const unreadMarkerClass = unread ? "opacity-100 visible" : "opacity-0 hidden"

  return (
    <div className="flex flex-col gap-2">
      <div className="space-x-[5px]">
        <span className="font-extrabold">{name}</span>
        <span className="text-grey-blue">{title}</span>
        {highlight && <span className={`${highlightClassName} `}>{highlight}</span>}
        <div className={`w-3 h-3 rounded-full bg-red inline-block transition-opacity ${unreadMarkerClass}`}></div>
      </div>
      <div>{time} ago</div>
    </div>
  )
}