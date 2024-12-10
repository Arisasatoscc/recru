/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Bulkregister(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="166px"
      height="53px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Bulkregister")}
      {...rest}
    >
      <View
        width="148.53px"
        height="45.05px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="7.5%"
        bottom="7.5%"
        left="4.39%"
        right="6.14%"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(207,241,246,1)"
        {...getOverrideProps(overrides, "Rectangle 245")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,16,102,1)"
        lineHeight="29.045454025268555px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="148.53px"
        height="21.2px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="-19.03%"
        bottom="79.03%"
        left="20.94%"
        right="-10.41%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="一括登録"
        {...getOverrideProps(overrides, "\u4E00\u62EC\u767B\u9332")}
      ></Text>
    </View>
  );
}
