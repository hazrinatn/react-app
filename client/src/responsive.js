import { css } from "styled-components";

export default function mobile(props) {
    return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};
