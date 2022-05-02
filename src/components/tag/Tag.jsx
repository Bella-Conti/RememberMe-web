import { TagStyled } from "./tag-styled";

export default function Tag({children, ...props}) {
  return <TagStyled {...props}>{children}</TagStyled>
}