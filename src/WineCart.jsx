import { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import data from '../data.json'
import { useNavigate } from 'react-router-dom';
import Home from "./Home";



function WineCart() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedWine, setSelectedWine] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('750ml');
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();


  // Function to add an item to the cart
  const addToCart = () => {
    if (selectedCategory && selectedWine && quantity > 0) {
      const wine = data.wines.find(
        (item) =>
          item.wine_type === selectedCategory && item.name === selectedWine
      );
      if (wine) {
        const price = selectedSize === '750ml' ? wine.price_750ml : wine.price_1litre;
        const item = {
          category: selectedCategory,
          name: selectedWine,
          quantity: quantity,
          size: selectedSize,
          price: price,
          image: wine.image, // Added image to the cart item
        };
        setCart([...cart, item]);
        setTotalPrice(totalPrice + quantity * price);
      }
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    const removedItem = updatedCart.splice(index, 1);
    setCart(updatedCart);
    setTotalPrice(totalPrice - removedItem[0].quantity * removedItem[0].price);
  };

  // Function to update item in the cart
  const updateCartItem = (index) => {
    const updatedCart = [...cart];
    const item = updatedCart[index];
    const wine = data.wines.find((wine) => wine.name === item.name);
    if (wine) {
      const price = item.size === '750ml' ? wine.price_750ml : wine.price_1litre;
      item.price = price;
      item.quantity = quantity;
      setCart(updatedCart);
      setTotalPrice(
        cart.reduce((total, item) => total + item.quantity * item.price, 0)
      );
    }
  };

  const checkout = () => {
    // Handle checkout logic (e.g., display "Order Received" message)
    if (window.confirm('Are you sure you want to check out?')) {
      alert('Order received');
      navigate('/Home');
   }

  };

  return (
    <Container>
      <h1 className="my-4">Wine Cart</h1>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="wineCategory">
              <Form.Label>Wine Category</Form.Label>
              <Form.Control
                as="select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select</option>
                {data.wines.map((wine) => (
                  <option key={wine.id} value={wine.wine_type}>
                    {wine.wine_type}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="wineName">
              <Form.Label>Wine Name</Form.Label>
              <Form.Control
                as="select"
                value={selectedWine}
                onChange={(e) => setSelectedWine(e.target.value)}
              >
                <option value="">Select</option>
                {data.wines
                  .filter((wine) => wine.wine_type === selectedCategory)
                  .map((wine) => (
                    <option key={wine.id} value={wine.name}>
                      {wine.name}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="wineSize">
              <Form.Label>Size</Form.Label>
              <Form.Check
                type="radio"
                label="750ml"
                id="size750ml"
                checked={selectedSize === '750ml'}
                onChange={() => setSelectedSize('750ml')}
              />
              <Form.Check
                type="radio"
                label="1 litre"
                id="size1litre"
                checked={selectedSize === '1 litre'}
                onChange={() => setSelectedSize('1 litre')}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={addToCart}
              className="mb-3"
            >
              Add to Cart
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          {/* <h2 className="my-3">Cart</h2> */}
          <ul className="list-unstyled">
            {cart.map((item, index) => (
              <li key={index} className="border mb-3 p-3">
                <Row>
                  <Col md={2}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      className="cart-item-image"
                    />
                  </Col>
                  <Col md={10}>
                    <div className="cart-item-details">
                      <p className="mb-1">
                        {item.category} - {item.name} ({item.size})
                      </p>
                      <p className="mb-1">Quantity: {item.quantity}</p>
                      <p className="mb-0">Price: Ksh{item.price * item.quantity}</p>
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(index)}
                        className="mr-2"
                      >
                        Remove
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => updateCartItem(index)}
                      >
                        Update
                      </Button>
                    </div>
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
          <h4 className="mt-3">Total Price: Ksh{totalPrice}</h4>
          <Button
            variant="success"
            onClick={checkout}
            className="mt-2"
          >
            Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default WineCart;
