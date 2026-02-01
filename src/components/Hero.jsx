import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #cbdbf8 15%, #d0daee 80%, #ffffff 100%)",
      }}
    >
      <Container
        className="text-center"
        style={{
          maxWidth: "560px", // sedikit lebih lebar untuk desktop
          paddingTop: "4.5rem",
          paddingBottom: "4.5rem",
        }}
      >
        {/* HEADLINE UTAMA */}
        <h1
          style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.1rem)", // responsif
            lineHeight: "1.25",
            fontWeight: 700,
            color: "#0b1f3a",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
          }}
        >
          Belanja Produk Berkualitas
          <br />
          Tanpa Ribet, Langsung via WhatsApp
        </h1>

        {/* SUBHEADLINE */}
        <p
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
            lineHeight: "1.6",
            color: "#4a5568",
            marginBottom: "2.4rem",
          }}
        >
          Produk pilihan dengan respon cepat, harga jelas, dan pengiriman aman
          ke seluruh Indonesia.
        </p>

        {/* ICON + CTA */}
        <div style={{ marginTop: "1.2rem" }}>
          {/* ICON */}
          <div
            className="d-flex align-items-center justify-content-center mx-auto"
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "50%",
              backgroundColor: "#e8f0ff",
              marginBottom: "2rem",
            }}
          >
            <i
              className="bi bi-shield-check"
              style={{
                fontSize: "2.6rem",
                color: "#0d6efd",
              }}
            ></i>
          </div>

          {/* CTA */}
          <Button
            variant="success"
            href="https://wa.me/628xxxxxxxxxx"
            className="w-100 d-flex align-items-center justify-content-center gap-2 py-2"
            style={{
              fontSize: "0.95rem",
              fontWeight: 600,
              borderRadius: "12px",
            }}
          >
            <i className="bi bi-whatsapp fs-5"></i>
            Chat via WhatsApp
          </Button>

          {/* MICRO TRUST */}
          <p
            style={{
              fontSize: "0.8rem",
              color: "#6b7280",
              marginTop: "1rem",
            }}
          >
            Respon cepat • Admin aktif • Aman & terpercaya
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
