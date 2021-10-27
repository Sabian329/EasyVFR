import React from "react";
import logoRound from "../../Asets/logoRound3.png";
import { Input } from "../Input/Index";

import { Logo } from "./Styled";

export const MainHeader = () => (
  <div>
    <div>
      <Logo src={logoRound} alt="plane logo" />
      <Input />
    </div>
  </div>
);
