/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function StudentsituPass1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="60px"
      height="51px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "StudentsituPass1")}
      {...rest}
    >
      <View
        width="60px"
        height="51px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(140,200,255,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(243,243,243,1)"
        {...getOverrideProps(overrides, "Rectangle 307")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,16,102,1)"
        lineHeight="24.204544067382812px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="64.69px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="-15.69%"
        bottom="68.63%"
        left="-4.69%"
        right="-3.12%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="不合格"
        {...getOverrideProps(overrides, "\u4E0D\u5408\u683C")}
      ></Text>
    </View>
  );
}
