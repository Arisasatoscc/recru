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
export declare type StudentsituAtten1blueOverridesProps = {
    StudentsituAtten1blue?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 306"?: PrimitiveOverrideProps<ViewProps>;
    "\u6B20\u5E2D"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StudentsituAtten1blueProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StudentsituAtten1blueOverridesProps | undefined | null;
}>;
export default function StudentsituAtten1blue(props: StudentsituAtten1blueProps): React.ReactElement;
