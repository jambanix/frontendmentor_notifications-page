import { useEffect, useState } from "react";
import { Heading } from "./Heading"

export const PrivateMessage = ({message}) => {
  return (
    <p className="py-4 px-6 border border-grey-blue/20 rounded-lg transition-colors hover:bg-light-grey-blue">{message}</p>
  )
}

export const PhotoComment = ({image}) => {
  return (
    <div className="col-start-3">
      <img src={image} alt="thumbnail of image comment" className="w-12 h-12 rounded-md"/>
    </div>
  )
}

export const Notification = ({ data, onClick }) => {

  const isUnread = data.unread
  const unreadClass = isUnread ? "bg-blue/5" : "bg-white"
  const gridCols = data.type !== "comment" ? "grid-cols-[65px_1fr]" : "grid-cols-[65px_1fr_65px]"

  // generate the title relevant to the notification type
  const title = () => {
    switch(data.type) {
      case "reaction":
        return "reacted to your recent post";
      case "follow":
        return "followed you";
      case "group":
        return data.info.type === "join" ? "has joined your group" : "left the group";
      case "message":
        return "sent you a private message"
      case "comment":
        return "commented on your picture";
    }
  }

  // pass ID up to parent on click
  const handleClick = () => onClick(data.id);

  return (
    <article className={`grid rounded-lg p-3 cursor-pointer transition duration-500 ease-in-out ${gridCols} ${unreadClass}`} onClick={handleClick}>
      <img src={data.avatar} alt={`profile of ${data.name}`} className="h-12 w-12 rounded-full col-start-1"/>
      <div className="col-start-2 space-y-3">
        <Heading name={data.name} title={title()} unread={isUnread} highlight={data.info?.highlight} time={data.time} notificationType={data.type}/>
        {data.type === "message" && <PrivateMessage message={data.info.body} />}
      </div>
      {data.type === "comment" && <PhotoComment image={data.info.thumbnail} />}
    </article>
  )
}