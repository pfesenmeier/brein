import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export function Title(props: { brand: string, links: string[] }) {

    return (<Navbar>
        <Navbar.Brand href="/">{props.brand}</Navbar.Brand>
        {props.links.map(link =>
            <Nav.Link key={link}>
              <Link to='/recipes'>
                    {link}
                </Link>
            </Nav.Link>)}
    </Navbar>);
}

