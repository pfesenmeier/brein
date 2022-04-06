import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export function Title(props: { brand: string, links: string[] }) {

    return (<Navbar>
      <Navbar.Brand>{props.brand}</Navbar.Brand>
      {props.links.map(link => <Nav.Link>{link}</Nav.Link>)}
    </Navbar>);
}

