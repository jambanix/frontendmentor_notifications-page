
export const Link = ({children, notificationType}) => {

  const textColour = () => {
    switch (notificationType) {
      case "group":
        return "text-blue";
      case "reaction":
        return "text-dark-grey-blue";
      default:
        return "text-black"
    }
  }

  return (
    <span className={`${textColour()} font-bold hover:text-blue transition-colors text-sm md:text-md`}>
      {children}
    </span>
  )
}