/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Perfil } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PerfilUpdateFormInputValues = {
    nombre?: string;
    apellido?: string;
    municipio?: string;
    genero?: boolean;
};
export declare type PerfilUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    apellido?: ValidationFunction<string>;
    municipio?: ValidationFunction<string>;
    genero?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PerfilUpdateFormOverridesProps = {
    PerfilUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    apellido?: PrimitiveOverrideProps<TextFieldProps>;
    municipio?: PrimitiveOverrideProps<TextFieldProps>;
    genero?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type PerfilUpdateFormProps = React.PropsWithChildren<{
    overrides?: PerfilUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    perfil?: Perfil;
    onSubmit?: (fields: PerfilUpdateFormInputValues) => PerfilUpdateFormInputValues;
    onSuccess?: (fields: PerfilUpdateFormInputValues) => void;
    onError?: (fields: PerfilUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PerfilUpdateFormInputValues) => PerfilUpdateFormInputValues;
    onValidate?: PerfilUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PerfilUpdateForm(props: PerfilUpdateFormProps): React.ReactElement;
