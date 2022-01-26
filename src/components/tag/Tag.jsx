import { TagStyled } from "./tag";

export default function Tag({children, ...props}) {
  return <TagStyled {...props}>{children}</TagStyled>
}