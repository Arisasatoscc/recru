/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Studentsituation2OverridesProps = {
    Studentsituation2?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 305"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 306"?: PrimitiveOverrideProps<ViewProps>;
    "\u63D0\u51FA"?: PrimitiveOverrideProps<TextProps>;
    "\u672A\u63D0\u51FA"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Studentsituation2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Studentsituation2OverridesProps | undefined | null;
}>;
export default function Studentsituation2(props: Studentsituation2Props): React.ReactElement;
