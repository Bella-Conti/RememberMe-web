import React, { useState } from "react"
import Button from "../../button/Button";
import Container from "../../container/Container";
import Text from "../../text/Text";
import Box from "../../box/Box";
import { ButtonGroup } from "./selectDay";
import { BoxGroup } from "./selectDay";

export default function SelectDay() {

  const [selectedDay, setSelectedDay] = useState([]);

  return (
    <>
    <Container  
    position="absolute"
    marginTop="45px"
    >
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
          {
            selectedDay.map(day => (
              {selectedDay && <p>(deu certo)</p>}
              <Box onClick={()=>handleSelected}>SUN</Box>

            ))
          }
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
      </Container>
    </>
  );
}
