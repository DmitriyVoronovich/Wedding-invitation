export const presentInitialValue = (inviteInfo: any, paramName: string, noAloneParamName: string) => {
    if (!inviteInfo.surveyResponses?.[paramName]) {
        return ''
    }

    if (!inviteInfo.surveyResponses?.[paramName].length) {
        return 'no';
    }

    if (inviteInfo.surveyResponses?.[paramName].length === inviteInfo.guests.length) {
        return inviteInfo.surveyResponses?.[noAloneParamName] ? 'noAlone' : 'yes'
    } else {
        return 'any';
    }
};
