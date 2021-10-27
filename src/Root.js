import { AirportInfo } from "./components/AirportInfo/AirportInfo";
import { MainHeader } from "./components/Header/Index";

import GlobalStyle from "./theme/globalStyle";

function Root() {
  return (
    <>
      <GlobalStyle />
      <MainHeader />
      <AirportInfo />
    </>
  );
}

export default Root;
