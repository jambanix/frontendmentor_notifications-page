import { useState } from "react";
import { Heading } from "./Heading"


export const Notification = ({ data }) => {

  const isUnread = data.unread
  const unreadClass = isUnread ? "bg-blue/5" : "bg-white"

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



  return (
    <article className={`grid grid-cols-[65px_1fr] rounded-lg p-3 ${unreadClass}`}>
      <img src={data.avatar} alt={`profile of ${data.name}`} className="h-12 w-12 rounded-full col-start-1"/>
      <div className="col-start-2">
        <Heading name={data.name} title={title()} unread={isUnread} highlight={data.info?.highlight}/>
      </div>
    </article>
  )
}