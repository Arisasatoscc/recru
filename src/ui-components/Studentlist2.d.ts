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
export declare type Studentlist2OverridesProps = {
    Studentlist2?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 233"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 19"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 20"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 261"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 271"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 332"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 336"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 340"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 21"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 328"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type Studentlist2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Studentlist2OverridesProps | undefined | null;
}>;
export default function Studentlist2(props: Studentlist2Props): React.ReactElement;
