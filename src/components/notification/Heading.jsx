
export const Heading = ({name, title, time, unread, highlight=null, highlightClassName=null}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <h2 className="font-extrabold">{name}</h2>
        <p className="text-grey-blue">{title}</p>
        {highlight && <p className={`${highlightClassName} `}>{highlight}</p>}
        {unread && <div className="w-3 h-3 rounded-full bg-red"></div>}
      </div>
      <p>{time} ago</p>
    </div>
  )
}