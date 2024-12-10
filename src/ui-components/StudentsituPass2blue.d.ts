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
export declare type StudentsituPass2blueOverridesProps = {
    StudentsituPass2blue?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 309"?: PrimitiveOverrideProps<ViewProps>;
    "\u672A\u5B9A"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StudentsituPass2blueProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StudentsituPass2blueOverridesProps | undefined | null;
}>;
export default function StudentsituPass2blue(props: StudentsituPass2blueProps): React.ReactElement;
