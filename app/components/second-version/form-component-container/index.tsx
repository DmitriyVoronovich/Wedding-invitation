import React, {useEffect, useState} from 'react';
import {Fade} from "react-awesome-reveal";
// @ts-ignore
import useSound from "use-sound";
import {FormComponentContainerProps} from "./types";
import {InterrogationForm, RespMessage, SectionTwoComponent} from "@components";


export const FormComponentContent = ({inviteInfo, inviteId, onInviteInfoUpdate, singleGuest}: FormComponentContainerProps) => {
    const [success, setSuccess] = useState(true);
    const [willBePresent, setWillBePresent] = useState<boolean>(!!inviteInfo?.surveyResponses && !!inviteInfo.surveyResponses?.presentGuests?.length);
    const [showMessage, setShowMessage] = useState(false);
    const [willBeThere, setWillBeThere] = useState(true);
    const [playFailure, { stop: stopFailure }] = useSound('/sound/grust.mp3');
    const [playSuccess, { stop: stopSuccess }] = useSound('/sound/pedro.mp3');

    const onBePresent = (willBe: boolean) => setWillBePresent(willBe);

    const onChangeWillThereBe = (willBe: boolean) => {
        if (willBe) {
            playSuccess();
        } else {
            playFailure();
        }
        setTimeout(() => {
            stopFailure();
            stopSuccess();
            setShowMessage(false);
        }, 13000);
    };

    const onRespForm = (res: boolean, willBe: boolean) => {
        setShowMessage(true);
        setSuccess(res);
        onInviteInfoUpdate();
        setWillBeThere(willBe);
        onChangeWillThereBe(willBe);
    };

    return (
        <>
            <Fade triggerOnce={true} cascade={true} damping={0.3} direction={'up'} >
                {showMessage
                    ? <RespMessage ans={success} willBeThere={willBeThere}/>
                    : <InterrogationForm inviteInfo={inviteInfo} inviteId={inviteId} onRespForm={onRespForm} singleGuest={singleGuest} onBePresent={onBePresent}/>}
            </Fade>
            <SectionTwoComponent willBePresent={willBePresent}/>
        </>

    );
};