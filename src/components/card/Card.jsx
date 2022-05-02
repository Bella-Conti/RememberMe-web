import { CardStyled, CardTitle, CardFooter, CardActions } from "./card-styled";

export default function Card({ children, ...props }) {
  return <CardStyled {...props}>{children}</CardStyled>;
}

Card.Title = CardTitle;
Card.Footer = CardFooter;
Card.Actions = CardActions;
