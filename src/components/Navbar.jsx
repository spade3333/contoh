import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        variant="light"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(8px)",
          padding: "0.5rem 0",
          height: "56px",
          zIndex: 1030,
        }}
        className="shadow-sm"
      >
        <Container style={{ maxWidth: "1100px" }} className="position-relative">
          {/* LOGO */}
          <Navbar.Brand
            href="#home"
            onClick={() => setExpanded(false)}
            style={{ fontSize: "1.3rem" }}
          >
            🛍️
          </Navbar.Brand>

          {/* BRAND CENTER (MOBILE ONLY) */}
          <div
            className="d-lg-none"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#0b1f3a",
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            BrandName
          </div>

          {/* BRAND DESKTOP */}
          <Navbar.Brand
            href="#home"
            className="d-none d-lg-block"
            style={{
              fontWeight: 700,
              color: "#0b1f3a",
              marginLeft: "0.4rem",
            }}
          >
            BrandName
          </Navbar.Brand>

          {/* TOGGLE */}
          <Navbar.Toggle
            aria-controls="main-navbar"
            className="ms-auto d-lg-none"
            onClick={() => setExpanded(expanded ? false : true)}
          />

          {/* ===== DESKTOP MENU (NORMAL) ===== */}
          <Navbar.Collapse
            id="main-navbar"
            className="d-none d-lg-flex justify-content-end"
          >
            <Nav className="gap-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#product">Product</Nav.Link>
              <Nav.Link href="#testimoni">Testimoni</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ===== MOBILE DROPDOWN ===== */}
      {expanded && (
        <div
          className="d-lg-none bg-white shadow-sm"
          style={{
            position: "fixed",
            top: "56px",
            width: "100%",
            zIndex: 1029,
          }}
        >
          <Nav className="flex-column text-center py-3 gap-2">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link href="#product" onClick={() => setExpanded(false)}>
              Product
            </Nav.Link>
            <Nav.Link href="#testimoni" onClick={() => setExpanded(false)}>
              Testimoni
            </Nav.Link>
          </Nav>
        </div>
      )}
    </>
  );
}

export default Navigation;
