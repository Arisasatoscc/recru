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
export declare type StudentsituPass1blueOverridesProps = {
    StudentsituPass1blue?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 308"?: PrimitiveOverrideProps<ViewProps>;
    "\u4E0D\u5408\u683C"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StudentsituPass1blueProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StudentsituPass1blueOverridesProps | undefined | null;
}>;
export default function StudentsituPass1blue(props: StudentsituPass1blueProps): React.ReactElement;
