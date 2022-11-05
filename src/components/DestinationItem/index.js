// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="listItem">
      <img src={imgUrl} alt={name} className="destImg" />
      <p className="destName">{name}</p>
    </li>
  )
}

export default DestinationItem
