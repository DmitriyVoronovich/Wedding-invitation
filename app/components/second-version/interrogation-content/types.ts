export type SelectInputItemProps = {
    requiredValue: boolean
    requiredMessage?: string
    initialValue: any
    placeholderValue: string
    optionsValue: any
    maxCountValue?: number
    itemName: string
    onFormValueChange: () => void
};

export type RadioInputItemProps = {
    requiredValue: boolean
    initialValue: any
    callback?: (e: any) => void
    children: any
    itemName: string
    requiredMessage?: string
    value?: string
};

export type PresentOnSecondDayComponentProps = {
    singleGuest: boolean
    presentOnSecondDayInit: any
    show: boolean
    needOneMorePlace: boolean
    onSecondDayListChange: (e: any) => void
    secondDayList: string
    inviteInfo: any
    options: any
    onFormValueChange: () => void
};

export type PresentGuestComponentProps = {
    singleGuest: boolean
    presentGuestInit: string
    show: boolean
    needOneMorePlace: boolean
    onShowAllQuestion: (e: any) => void
    onFirstDayList: (e: any) => void
    firstDayList: string
    inviteInfo: any
    options: any
    onFormValueChange: () => void
};

export type InterrogationFormProps = {
    inviteInfo: any
    inviteId: string
    onRespForm: (res: boolean, willBe: boolean) => void
    singleGuest: boolean
};
