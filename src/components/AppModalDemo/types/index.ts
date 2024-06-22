export type IPropsUtm = {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    term?: string;
}

export type IPropsAppModalDemo = {
    open: boolean;
    handleClose: () => void;
    utmTags?: IPropsUtm
}