/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { CardData } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Heading,
  SelectField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Cardedit(props) {
  const { Card, groups, overrides, ...rest } = props;
  const [
    textFieldThreeFiveFourEightTwoEightSixSixValue,
    setTextFieldThreeFiveFourEightTwoEightSixSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveFourEightTwoEightZeroFiveValue,
    setTextFieldThreeFiveFourEightTwoEightZeroFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveFourEightTwoEightZeroFourValue,
    setTextFieldThreeFiveFourEightTwoEightZeroFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFiveFourEightTwoEightSevenThreeValue,
    setTextFieldThreeFiveFourEightTwoEightSevenThreeValue,
  ] = useStateMutationAction("");
  const buttonThreeFiveFourEightTwoEightZeroEightOnClick =
    useDataStoreCreateAction({
      fields: {
        Nunber: textFieldThreeFiveFourEightTwoEightSixSixValue,
        name: textFieldThreeFiveFourEightTwoEightZeroFiveValue,
        department: textFieldThreeFiveFourEightTwoEightZeroFourValue,
        image_url: textFieldThreeFiveFourEightTwoEightSevenThreeValue,
      },
      model: CardData,
      schema: schema,
    });
  return (
    <View
      width="420px"
      height="540px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(209,211,255,0.3)"
      {...rest}
      {...getOverrideProps(overrides, "Cardedit")}
    >
      <TextField
        display="flex"
        position="absolute"
        top="104px"
        left="60px"
        direction="column"
        width="300px"
        padding="0px 0px 0px 0px"
        label="??????"
        placeholder={Card?.department}
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        value={textFieldThreeFiveFourEightTwoEightZeroFourValue}
        onChange={(event) => {
          setTextFieldThreeFiveFourEightTwoEightZeroFourValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField35482804")}
      ></TextField>
      <TextField
        display="flex"
        position="absolute"
        top="182px"
        left="60px"
        direction="column"
        width="300px"
        padding="0px 0px 0px 0px"
        label="??????"
        placeholder={Card?.name}
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        value={textFieldThreeFiveFourEightTwoEightZeroFiveValue}
        onChange={(event) => {
          setTextFieldThreeFiveFourEightTwoEightZeroFiveValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField35482805")}
      ></TextField>
      <TextField
        display="flex"
        position="absolute"
        top="260px"
        left="60px"
        direction="column"
        width="300px"
        padding="0px 0px 0px 0px"
        label="??????"
        placeholder={Card?.Nunber}
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        value={textFieldThreeFiveFourEightTwoEightSixSixValue}
        onChange={(event) => {
          setTextFieldThreeFiveFourEightTwoEightSixSixValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField35482866")}
      ></TextField>
      <TextField
        display="flex"
        position="absolute"
        top="416px"
        left="60px"
        direction="column"
        width="300px"
        padding="0px 0px 0px 0px"
        label="Image_URL"
        placeholder={Card?.image_url}
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        value={textFieldThreeFiveFourEightTwoEightSevenThreeValue}
        onChange={(event) => {
          setTextFieldThreeFiveFourEightTwoEightSevenThreeValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField35482873")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="494px"
        left="60px"
        justifyContent="center"
        alignItems="center"
        size="small"
        isDisabled={false}
        variation="primary"
        children="????????????"
        onClick={() => {
          buttonThreeFiveFourEightTwoEightZeroEightOnClick();
        }}
        {...getOverrideProps(overrides, "Button35482808")}
      ></Button>
      <Heading
        display="flex"
        gap="0"
        position="absolute"
        top="44px"
        left="33px"
        padding="0px 0px 0px 0px"
        level="3"
        children="????????????????????????"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <SelectField
        display="flex"
        position="absolute"
        top="338px"
        left="60px"
        direction="column"
        width="300px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="???????????????"
        placeholder={Card?.status}
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      >
      <option value="????????????">????????????</option>
      <option value="??????">??????</option>
      <option value="??????">??????</option>
      <option value="??????">??????</option>
      <option value="??????">??????</option>
      <option value="?????????">?????????</option>
      </SelectField>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="31px"
        left="344px"
        justifyContent="center"
        alignItems="center"
        size="small"
        isDisabled={true}
        variation="link"
        children="??????"
        {...getOverrideProps(overrides, "Button35482924")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="494px"
        left="266px"
        justifyContent="center"
        alignItems="center"
        size="small"
        isDisabled={false}
        variation="link"
        children="???????????????"
        {...getOverrideProps(overrides, "Button35482928")}
      ></Button>
    </View>
  );
}
