import { CardStyled, CardTitle, CardFooter, CardActions } from "./card-styled";
import { CardProps } from "./types";

export const Card = ({ children, ...props }: CardProps) => {
  return <CardStyled {...props}>{children}</CardStyled>;
};

Card.Title = CardTitle;
Card.Footer = CardFooter;
Card.Actions = CardActions;
