export  const presentInitialValue = (inviteInfo: any, paramName: string) => {
    let resultValue;
    if (!inviteInfo.surveyResponses?.[paramName]) {
        return ''
    }
    if (!inviteInfo.surveyResponses?.[paramName].length) {
        resultValue = 'no';
    } else {
        resultValue = inviteInfo.surveyResponses?.[paramName].length === inviteInfo.guests.length ? 'yes' : 'any';
    }

    return resultValue
};