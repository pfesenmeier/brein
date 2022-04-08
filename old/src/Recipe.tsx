import ListGroup from "react-bootstrap/ListGroup";
import { Link } from 'react-router-dom';

export function Recipe(props: { name: string }) {
    return (<ListGroup.Item><Link to={"/recipes/" + props.name}>{props.name}</Link></ListGroup.Item>);
}

