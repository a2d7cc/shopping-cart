import { Nav, Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, closeCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3 py-3 px-5">
      <Nav className="me-auto">
        <Nav.Link to={"/"} as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to={"/store"} as={NavLink}>
          Store
        </Nav.Link>
        <Nav.Link to={"/about"} as={NavLink}>
          About
        </Nav.Link>
      </Nav>
      <Button 
          onClick={openCart}
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
        >
          <title>Shopping Store Cart SVG icon</title>
          <g>
            <g>
              <path d="M979.6,300.4c8.6,10.8,11.9,23.8,9.7,38.9l-41.1,235.7c-1.4,12.3-7,22.3-16.8,30.3c-9.7,7.9-20.7,11.9-33,11.9h-599l-11.9,67h570.8c13.7,0,25.6,4.9,35.7,14.6c10.1,9.7,15.1,21.8,15.1,36.2c0,14.4-5,26.5-15.1,36.2c-10.1,9.7-22,14.6-35.7,14.6H227.1c-15.1,0-28.1-6.1-38.9-18.4c-10.1-12.3-14.1-26.3-11.9-42.2l27-147l-41.1-413L45.5,128.5c-13.7-4.3-23.6-12.6-29.7-24.9C9.7,91.4,8.4,78.5,12,64.8C16.3,51.1,24.8,41.2,37.4,35s25.4-7.4,38.4-3.8L225,78.8c9.4,2.9,17.1,8.3,23.2,16.2c6.1,7.9,9.9,16.9,11.4,27l8.6,82.2L945,279.9C960.2,282.1,971.7,288.9,979.6,300.4z M303.9,814c21.6,0,40,7.6,55.1,22.7c15.1,15.1,22.7,33.5,22.7,55.1c0,21.6-7.6,40.2-22.7,55.7c-15.1,15.5-33.5,23.2-55.1,23.2c-21.6,0-40-7.7-55.1-23.2s-22.7-34.1-22.7-55.7c0-21.6,7.6-40,22.7-55.1C263.9,821.6,282.3,814,303.9,814z M765.6,814c21.6,0,40,7.6,55.1,22.7c15.1,15.1,22.7,33.5,22.7,55.1c0,21.6-7.6,40.2-22.7,55.7c-15.1,15.5-33.5,23.2-55.1,23.2c-21.6,0-40-7.7-55.1-23.2c-15.1-15.5-22.7-34.1-22.7-55.7c0-21.6,7.6-40,22.7-55.1C725.6,821.6,743.9,814,765.6,814z"></path>
            </g>
          </g>
        </svg>
        <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
             style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: "0",  right: "0",
                       transform: "translate(25%, 25%"}}
        >{cartQuantity}</div>
      </Button>
    </NavbarBs>
  );
};

export default Navbar;
