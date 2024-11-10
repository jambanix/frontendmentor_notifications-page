import { Title } from "./Title"

export const Card = () => {
  return (
    <section className="bg-white rounded-lg px-4 py-5 w-[90%] max-w-[730px] md:px-8 md:py-8">
      <div className="flex justify-between">
        <Title unreadCount={0}/>
        <button className="bg-none outline-none text-dark-grey-blue">Mark all as read</button>
      </div>
      
    </section>
  )
}