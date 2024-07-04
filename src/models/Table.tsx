export interface ITblHead {
    id: string;
    showMobile: boolean;
    showTablet: boolean;
    label: string;
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