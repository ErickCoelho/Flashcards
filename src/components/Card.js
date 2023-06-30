import CardBack from "./CardBack";
import CardFront from "./CardFront";

export default function Card(props){
    if (props.showAnswer)
        return <CardBack/>;
    else
        return <CardFront />;
}