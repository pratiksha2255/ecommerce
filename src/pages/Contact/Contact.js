function Contact() {
  return (
    <>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ color: "#333", marginBottom: "1rem" }}>Contact Us</h1>
        <p style={{ marginBottom: "1.5rem" }}>
          We'd love to hear from you! Whether you have a question about our
          products, need support, or just want to say hello, feel free to reach
          out.
        </p>

        <h2 style={{ color: "#333", marginBottom: "1rem" }}>
          Send Us a Message
        </h2>
        <form
          action="/submit-form"
          method="POST"
          style={{ marginBottom: "2rem" }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              htmlFor="name"
              style={{
                display: "block",
                fontSize: "16px",
                marginBottom: "0.5rem",
                color: "#333",
              }}
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                outline: "none",
              }}
            />
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontSize: "16px",
                marginBottom: "0.5rem",
                color: "#333",
              }}
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                outline: "none",
              }}
            />
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              htmlFor="message"
              style={{
                display: "block",
                fontSize: "16px",
                marginBottom: "0.5rem",
                color: "#333",
              }}
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                outline: "none",
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "0.75rem 1.5rem",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
