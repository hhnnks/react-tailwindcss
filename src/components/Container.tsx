import React from "react";
import Styled from "styled-components";

export default function Container({ children }: any) {
  return <ContainerTemplate>{children}</ContainerTemplate>;
}

const ContainerTemplate = Styled.div`
    width: 100%;
    height: 100%;
`;
