import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.5;
  text-align: justify;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <h2>About Us</h2>
      <p>
      Welcome to CritiqueReviews, the site where you can share your opinions and experiences about any restaurant you have visited.
     Whether you enjoyed a delicious meal, had a great service, or were disappointed by the quality or atmosphere, you can let others know what you think.
    CritiqueReviews is a site that allows you to create posts with your reviews for any restaurant you choose.
      </p>
      <p>
      You can also edit or delete your posts if you change your mind or want to update your feedback.
    To start posting, you need to create an account and log in to the site. You can also log out anytime you want.
      Our goal is to provide a platform for honest and respectful reviews that can help other customers and restaurant owners alike.
    We hope you find CritiqueReviews useful and fun, and we invite you to explore the site and discover new places to eat and enjoy.
      </p>
    </StyledAbout>
  );
};

export default About;