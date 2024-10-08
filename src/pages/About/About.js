import React from "react";

const About = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          color: "#333",
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: "2.5rem",
        }}
      >
        About Us
      </h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
        Welcome to <strong>Your eCommerce Website</strong>, where we are
        passionate about delivering quality products and exceptional service.
      </p>

      <h2
        style={{
          color: "#333",
          marginTop: "2rem",
          marginBottom: "1rem",
          fontSize: "2rem",
        }}
      >
        Our Story
      </h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
        Founded in 2000, we started with a simple mission: to bring high-quality
        products to customers all over the world. Our journey began in Gujrat,
        where we opened our first store. Since then, we have grown into a
        trusted online retailer, offering a wide range of services.
      </p>

      <h2
        style={{
          color: "#333",
          marginTop: "2rem",
          marginBottom: "1rem",
          fontSize: "2rem",
        }}
      >
        Our Mission
      </h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
        Our mission is to provide our customers with the best shopping
        experience possible. We carefully select each product in our store to
        ensure that it meets the highest standards of quality, style, and value.
      </p>
    </div>
  );
};

export default About;
