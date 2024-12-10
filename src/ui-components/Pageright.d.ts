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
export declare type PagerightOverridesProps = {
    Pageright?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 344"?: PrimitiveOverrideProps<ViewProps>;
    ">"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PagerightProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PagerightOverridesProps | undefined | null;
}>;
export default function Pageright(props: PagerightProps): React.ReactElement;
