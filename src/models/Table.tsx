export interface ITblHeadStyle {
    background?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
}

export interface ITblKeyValue {
    key: string;
    style: ITblHeadStyle;
}

export interface ITblHead {
    id: string;
    showMobile: boolean;
    showTablet: boolean;
    label: string;
    inputtype?: "text" | "select";
    onSubmit?: (data:unknown) => void;
    decoration?: ITblKeyValue[]; 
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