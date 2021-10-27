import React from "react";
import { Button, InputItem, Wrapper } from "./Styled";

export const Input = () => (
  <Wrapper>
    <InputItem placeholder="Type ICAO code" />
    <Button>search</Button>
  </Wrapper>
);
