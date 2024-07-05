import { AnyObject, ObjectSchema } from "yup";

export interface ITblHead {
    id: string;
    showMobile: boolean;
    showTablet: boolean;
    label: string;
    inputtype?: "text";
    schema?: null | ObjectSchema<AnyObject>;
}

export interface ITblCell {
    key: string;
    value: string;
    showMobile: boolean;
    showTablet: boolean;
    maxWidth?: number;
}

export interface ITblRowAdapter {
    getTblRow: () => ITblCell[];
}