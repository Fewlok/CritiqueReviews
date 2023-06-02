import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const StyledForm = styled.form`
  max-width: 380px;
  width: 80%;
  padding: 30px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  label {
    display: block;
    margin-bottom: 10px;
    color: #555;
  }

  input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  textarea:focus {
    border-color: #3d8fd1;
  }

  button {
    width: 100%;
    padding: 12px 30px;
    background-color: #3d8fd1;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #2d6ca7;
    }
  }
`;

const UpdateBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content: body };
    const token = JSON.parse(localStorage.getItem("user")).token;
    if (!token) return;
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "auth-token": token },
      body: JSON.stringify(blog),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Update Review</h2>

        <label>Review title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Review body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button>Update Review</button>
      </StyledForm>
    </StyledContainer>
  );
}

export default UpdateBlog;
