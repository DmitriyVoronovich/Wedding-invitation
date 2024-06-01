export  const presentInitialValue = (inviteInfo: any, paramName: string) => {
    if (!inviteInfo.surveyResponses?.[paramName]) {
        return ''
    }

    if (!inviteInfo.surveyResponses?.[paramName].length) {
        return 'no';
    }

    return  inviteInfo.surveyResponses?.[paramName].length === inviteInfo.guests.length ? 'yes' : 'any';
};