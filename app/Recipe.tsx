import { Link } from '@remix-run/react';

export function Recipe(props: { name: string }) {
    return (<li><Link to={"/recipes/" + props.name}>{props.name}</Link></li>);
}

