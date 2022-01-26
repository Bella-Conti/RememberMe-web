import Button from "../../button/Button";
import Container from "../../container/Container";
import Text from "../../text/Text";
import Box from "../../box/Box";
import { ButtonGroup } from "./selectDay";
import { BoxGroup } from "./selectDay";

export default function SelectDay() {
  return (
    <>
    <Text>Repeat On</Text>
      <Container
        background="#0A1045"
        display="flex"
        flexDirection="column"
        width="396px"
        height="150px"
        alignItems="center"
        gap="20px"
        justifyContent="center"
        flexWrap="wrap"
        padding="10px"
        marginTop="0.188rem"
      >
        <BoxGroup>
          <Box>SUN</Box>
          <Box>MON</Box>
          <Box>TUE</Box>
          <Box>WED</Box>
          <Box>THU</Box>
          <Box>FRI</Box>
          <Box>SAT</Box>
        </BoxGroup>

        <ButtonGroup>
          <Button variant="disabled" size="sm">
            Done
          </Button>
          <Button variant="ghost" size="sm">
            Cancel
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
}
