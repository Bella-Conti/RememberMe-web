import { CardStyled, CardTitle, CardFooter } from "./card";

export default function Card({ children, ...props }) {
  return <CardStyled {...props}>{children}</CardStyled>;
}

Card.Title = CardTitle;
Card.Footer = CardFooter;
