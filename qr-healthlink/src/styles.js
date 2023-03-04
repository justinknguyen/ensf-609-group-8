import styled from "styled-components";

export const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

export const Form = styled.div`
  max-width: 30rem;
  width: 100%;
  padding: 1rem;
`;

export const InputTitle = styled.p`
  font-weight: 500;
`;

export const Input = styled.input`
  border: 1px solid #bfbfbf;
  border-radius: 0.25rem;
  padding: 0 1rem;
  width: 100%;
`;

export const BigInput = styled.textarea`
  border: 1px solid #bfbfbf;
  border-radius: 0.25rem;
  padding: 0 1rem;
  resize: none;
  width: 100%;
`;

export const Centered = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Code = styled.p``;

export const Download = styled.a`
  border-radius: 0.75rem;
  color: #1976d2;
  font-weight: 500;
  text-decoration: none;
  padding: 1rem;
`;
