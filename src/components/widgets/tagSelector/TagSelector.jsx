import Tag from "../../tag/Tag";
import Text from "../../text/Text";
import Container from "../../container/Container";
import Icon from "../../icon/Icon";
import { Flex } from "../../flex/flex-styled";

export default function TagSelector() {
  return (
    <>
      <Container
        position="absolute"
        height="191px"
        width="258px"
        marginTop="45px"
      >
        <Text>Select a tag</Text>
        <Container
          flexWrap="wrap"
          display="flex"
          width="233px"
          height="138px"
          background="#0A1045"
          columnGap="12px"
          padding="10px"
          marginTop="20px"
        >
          <Tag background="#0DC5FF" />
          <Tag background="#1714CC" />
          <Tag background="#70FF00" />
          <Tag background="#8D0505" />
          <Tag background="#E3DC2B" />
          <Tag background="#11BD0D" />
          <Tag background="#870242" />
          <Tag background="#0073A4" />
          <Tag background="#FF8C00" />
          <Flex>
            <Text>Tag name</Text>
            <Icon name="edit" color="white" />
          </Flex>
        </Container>
      </Container>
    </>
  );
}
