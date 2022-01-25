import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

* {
  font-size: 1rem;
}


html {
  font-size: calc(60% + 0.8vmin);
}

h1 {
  font-size: 2.2rem;
}
h2 {
  font-size: 1.6rem;
}

h3 {
  font-size: 1.3rem;
}

`;
