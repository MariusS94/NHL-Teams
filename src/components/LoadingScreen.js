import React from "react";
import styled from "@emotion/styled";

const ContainerLoading = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background: var(--bg-greygradient-);
`;

const LoadingImage = styled.img`
  height: 8em;
  width: auto;
`;

const LoadingScreen = (probs) => {
  return (
    <ContainerLoading>
      <LoadingImage src={probs.src} alt={probs.alt} />
    </ContainerLoading>
  );
};

export default LoadingScreen;
