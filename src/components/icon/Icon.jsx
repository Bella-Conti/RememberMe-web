import { IconStyled } from "./icon";

export default function Icon({ name, color, ...props }) {
  return (
    <IconStyled color={color} {...props}>
      {name}
    </IconStyled>
  );
}
