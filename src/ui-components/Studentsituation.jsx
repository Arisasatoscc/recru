/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Studentsituation(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="163px"
      height="51px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Studentsituation")}
      {...rest}
    >
      <View
        width="52px"
        height="51px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="68.1%"
        border="1px SOLID rgba(140,200,255,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(243,243,243,1)"
        {...getOverrideProps(overrides, "Rectangle 305")}
      ></View>
      <View
        width="50px"
        height="51px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="33.74%"
        right="35.58%"
        border="1px SOLID rgba(140,200,255,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(243,243,243,1)"
        {...getOverrideProps(overrides, "Rectangle 306")}
      ></View>
      <View
        width="49px"
        height="51px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="66.26%"
        right="3.68%"
        border="1px SOLID rgba(140,200,255,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(243,243,243,1)"
        {...getOverrideProps(overrides, "Rectangle 307")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(0,16,102,1)"
        lineHeight="12.102272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="34px"
        height="26px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="39.22%"
        bottom="9.8%"
        left="5.52%"
        right="73.62%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="出席"
        {...getOverrideProps(overrides, "\u51FA\u5E2D")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="9px"
        fontWeight="400"
        color="rgba(0,16,102,1)"
        lineHeight="10.892045021057129px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="36px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="43.14%"
        bottom="9.8%"
        left="38.04%"
        right="39.88%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="欠席"
        {...getOverrideProps(overrides, "\u6B20\u5E2D")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="9px"
        fontWeight="400"
        color="rgba(0,16,102,1)"
        lineHeight="10.892045021057129px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="61px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="39.22%"
        bottom="11.76%"
        left="62.58%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="キャンセル"
        {...getOverrideProps(overrides, "\u30AD\u30E3\u30F3\u30BB\u30EB")}
      ></Text>
    </View>
  );
}
