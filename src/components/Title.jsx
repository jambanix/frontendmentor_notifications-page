
export const Title = ({ unreadCount }) => {
  return (
    <div className="flex gap-2 items-center">
      <h2 className="font-extrabold text-xl">Notifications</h2>
      <div className="text-white bg-blue px-3 py-1 rounded-lg font-bold text-sm">
        <p>{unreadCount}</p>
      </div>
    </div>
  )
}