import { IconStyled } from "./icon-styled";

type IconProps = {
  name: string;
  color?: string;
  fontSize?: string;
  type?: string;
  onClick?: () => void;
};

export const Icon = ({ name, color, ...props }: IconProps) => {
  return (
    <IconStyled color={color} {...props}>
      {name}
    </IconStyled>
  );
};
