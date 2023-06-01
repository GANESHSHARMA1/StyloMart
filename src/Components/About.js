import React from "react";

const About = () => {
  return (
    <>
      <div className="container">
        <h1
          className="text-center my-4"
          style={{ fontFamily: "HP Simplified" }}
        >
          About Us
        </h1>
        <p>
          Welcome to StyloMart! At StyloMart, we believe that fashion is not
          just about clothes; it's a form of self-expression, creativity, and
          confidence. We are an online destination that brings you the latest
          trends, the most stylish garments, and an unparalleled shopping
          experience. With our wide range of clothing options, we cater to every
          individual's unique style and fashion preferences. Our mission is to
          empower you to look and feel your best, no matter the occasion.
          Whether you're searching for the perfect outfit for a special event,
          updating your wardrobe essentials, or simply indulging in a little
          retail therapy, StyloMart is your go-to destination. We curate a
          diverse collection of stylish clothes, ensuring that there's something
          for everyone, regardless of age, gender, or personal taste. What sets
          us apart is our dedication to quality. We collaborate with renowned
          brands and emerging designers who share our commitment to
          craftsmanship and exceptional design. Each garment featured on our
          website is carefully selected to meet our high standards, ensuring
          that you receive nothing but the best. We understand that shopping
          online can be overwhelming, which is why we've designed our website to
          be user-friendly and intuitive. With a few clicks, you can browse
          through our extensive catalogue, filter your search based on size,
          color, and style, and make your purchase with ease. Our secure payment
          options and reliable shipping ensure a smooth and hassle-free shopping
          experience from start to finish. At StyloMart, we value our customers
          and prioritize their satisfaction. Our dedicated customer support team
          is always ready to assist you with any queries or concerns you may
          have. We believe in building long-lasting relationships with our
          customers and strive to provide exceptional service at every step of
          your journey with us. We also recognize the importance of
          sustainability in the fashion industry. As part of our commitment to a
          greener future, we actively seek out environmentally friendly and
          ethically sourced products. By choosing StyloMart, you can be
          confident that your fashion choices contribute to a more sustainable
          world. Thank you for choosing StyloMart as your trusted online fashion
          destination. We invite you to explore our collection, embrace your
          personal style, and embark on a stylish journey with us. Get ready to
          elevate your wardrobe, one fashionable piece at a time.
        </p>
      </div>
      <div className="container">
        <h1
          className="text-center my-4"
          style={{ fontFamily: "HP Simplified" }}
        >
          How to use
        </h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Steps</th>
              <th scope="col">Previous</th>
              <th scope="col">Next</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Shirt</td>
              <td>Q</td>
              <td>E</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Pants/Caps</td>
              <td>A</td>
              <td>D</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Sweater</td>
              <td>B</td>
              <td>M</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Persons(Uploaded Images)</td>
              <td>Z</td>
              <td>C</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Suits</td>
              <td>J</td>
              <td>L</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Kurthis</td>
              <td>T</td>
              <td>U</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h3>
          Note: Enter T in image mode to toggle between the clothes of different
          gender Press P in any mode to exit.
        </h3>
      </div>
    </>
  );
};

export default About;
