import React from 'react';
import styled from 'styled-components';
import Logo from './WelcomingPic.png';

const StyledHome = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  .home-title {
    font-size: 36px;
    margin-bottom: 20px;
  }

  .home-description {
    font-size: 18px;
    margin-bottom: 40px;
    color: #666;
  }

  .home-image {
    max-width: 100%;
    height: auto;
    margin-bottom: 40px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <h1 className="home-title">Welcome!</h1>
      <p className="home-description">Thank you for joining our community. We're excited to have you on board.</p>
      <img className="home-image" src={Logo} alt="Welcome" />
      <h3>Discover and Explore</h3>
      <p>Discover a collection of reviews on various topics from our community of reviewers. Get insights and recommendations to make informed decisions.</p>
      <h3>Engage and Contribute</h3>
      <p>Sign in to participate in the discussion, share your own reviews, and interact with others in the community. Share your opinion!</p>
    </StyledHome>
  );
}

export default Home;