/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type Studentlist1OverridesProps = {
    Studentlist1?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 232"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 16"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 17"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 260"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 270"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 331"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 335"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 339"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 18"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 327"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type Studentlist1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Studentlist1OverridesProps | undefined | null;
}>;
export default function Studentlist1(props: Studentlist1Props): React.ReactElement;
