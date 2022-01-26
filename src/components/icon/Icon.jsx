import { IconStyled } from "./icon";

export default function Icon({ name, color, ...props }) {
  console.log("PROPS:", props);
  return (
    <IconStyled color={color} {...props}>
      {name}
    </IconStyled>
  );
}
