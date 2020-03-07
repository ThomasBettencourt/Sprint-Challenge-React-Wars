import React from 'react'
import './CharCard.css'
import { Card } from 'semantic-ui-react'
export default function Characters(props) {
    return (
        <div className= "Card">
        <Card.Group>
       <Card>
         <Card.Content>
           <Card.Header className="card-header"><span className="name"> {props.name}</span></Card.Header>
           <Card.Meta>Birth Year:<br></br><span className="attribute">  {props.birth_year}</span></Card.Meta>
           <Card.Description>Hair: <br></br><span className="attribute">  {props.hair_color}</span></Card.Description>
           <Card.Description>Height: <br></br><span className="attribute">  {props.height}</span></Card.Description>
           <Card.Description>Eyes:<br></br> <span className="attribute">  {props.eye_color}</span></Card.Description>
           <Card.Description>Gender:<br></br><span className="attribute">  {props.gender} </span></Card.Description>
         </Card.Content>
       </Card>
     </Card.Group>
       </div>
    )
}