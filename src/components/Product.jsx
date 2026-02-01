import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import produkImage from "../assets/images/produk1.jpg";

function Product() {
  const products = [
    { id: 1, name: "MacBook Air M1", price: "Rp 12.500.000" },
    { id: 2, name: "ASUS VivoBook 14", price: "Rp 6.200.000" },
    { id: 3, name: "HP Pavilion 15", price: "Rp 7.800.000" },
    { id: 4, name: "Lenovo IdeaPad Slim 3", price: "Rp 5.900.000" },
  ];

  // Mobile slider (2 produk)
  const productPairs = [];
  for (let i = 0; i < products.length; i += 2) {
    productPairs.push(products.slice(i, i + 2));
  }

  const ProductCard = ({ item }) => (
    <Card
      className="h-100 text-center"
      style={{
        border: "none",
        borderRadius: "18px",
        backgroundColor: "#ffffff",
        boxShadow: "0 12px 28px rgba(15, 23, 42, 0.08)",
        overflow: "hidden",
      }}
    >
      {/* IMAGE → jadi penentu tinggi card */}
      <Card.Img
        src={produkImage}
        alt={item.name}
        style={{
          height: "160px", // ⬅️ desktop lebih tinggi
          objectFit: "contain",
          padding: "12px",
        }}
      />

      <Card.Body style={{ padding: "1rem" }}>
        {/* NAMA */}
        <Card.Title
          style={{
            fontSize: "0.9rem",
            fontWeight: 600,
            marginBottom: "0.3rem",
            color: "#0b1f3a",
          }}
        >
          {item.name}
        </Card.Title>

        {/* HARGA */}
        <div
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#16a34a",
            marginBottom: "1rem",
          }}
        >
          {item.price}
        </div>

        {/* CTA */}
        <Button
          variant="outline-success"
          size="sm"
          href="https://wa.me/628xxxxxxxxxx"
          className="w-100 d-flex align-items-center justify-content-center gap-1"
          style={{
            fontSize: "0.75rem",
            borderRadius: "12px",
            padding: "0.45rem",
          }}
        >
          <i className="bi bi-whatsapp"></i>
          Pesan
        </Button>
      </Card.Body>
    </Card>
  );

  return (
    <section
      id="product"
      style={{
        background: "linear-gradient(180deg, #c1d4f0 0%, #ffffff 100%)",
        paddingTop: "4.5rem",
        paddingBottom: "4.5rem",
      }}
    >
      <Container>
        <h2
          className="text-center"
          style={{
            fontWeight: 700,
            color: "#0b1f3a",
            marginBottom: "0.4rem",
          }}
        >
          Produk Kami
        </h2>

        <p
          className="text-center"
          style={{
            fontSize: "0.85rem",
            color: "#64748b",
            marginBottom: "2.2rem",
          }}
        >
          Laptop pilihan, siap dipesan cepat via WhatsApp.
        </p>

        {/* MOBILE */}
        <div className="d-md-none">
          <Carousel indicators={false} interval={3500}>
            {productPairs.map((pair, index) => (
              <Carousel.Item key={index}>
                <Row className="g-3">
                  {pair.map((item) => (
                    <Col xs={6} key={item.id}>
                      <ProductCard item={item} />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* DESKTOP */}
        <Row className="g-4 d-none d-md-flex">
          {products.map((item) => (
            <Col md={3} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Product;
