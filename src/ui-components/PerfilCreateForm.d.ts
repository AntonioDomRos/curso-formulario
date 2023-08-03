/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PerfilCreateFormInputValues = {
    nombre?: string;
    apellido?: string;
    municipio?: string;
    genero?: boolean;
};
export declare type PerfilCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    apellido?: ValidationFunction<string>;
    municipio?: ValidationFunction<string>;
    genero?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PerfilCreateFormOverridesProps = {
    PerfilCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    apellido?: PrimitiveOverrideProps<TextFieldProps>;
    municipio?: PrimitiveOverrideProps<TextFieldProps>;
    genero?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PerfilCreateFormProps = React.PropsWithChildren<{
    overrides?: PerfilCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PerfilCreateFormInputValues) => PerfilCreateFormInputValues;
    onSuccess?: (fields: PerfilCreateFormInputValues) => void;
    onError?: (fields: PerfilCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PerfilCreateFormInputValues) => PerfilCreateFormInputValues;
    onValidate?: PerfilCreateFormValidationValues;
} & React.CSSProperties>;
export default function PerfilCreateForm(props: PerfilCreateFormProps): React.ReactElement;
