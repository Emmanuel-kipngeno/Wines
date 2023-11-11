import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <div className='nav-bar'>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="justify-content-center">
      <Navbar.Brand href="home" className='brand-left'>WINE ZONE</Navbar.Brand>
        <Navbar.Collapse className='justify-content-end'>
          <Nav className="navlink">
            <Nav.Link href="home" className="mr-3 nav-link">Home</Nav.Link>
            <Nav.Link href="category" className="mr-3 nav-link">Category</Nav.Link>
            <Nav.Link href="recommendation" className="mr-3 nav-link">Recommendation</Nav.Link>
            <Nav.Link href="cart" className="mr-3 nav-link">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </div>
    
  );
}

export default NavigationBar;
