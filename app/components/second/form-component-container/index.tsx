import React, {useEffect, useState} from 'react';
import {Fade} from "react-awesome-reveal";
import {RespMessage} from "@/app/components/second/respons-message";
import {InterrogationForm} from "@/app/components/second/interrogation-content/interrogation-form";
// @ts-ignore
import useSound from "use-sound";
import {SectionTwoComponent} from "@/app/components/second/content/section_two";

export const FormComponentContent = ({inviteInfo, inviteId, onInviteInfoUpdate, singleGuest}: any) => {
    const [success, setSuccess] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const [willBeThere, setWillBeThere] = useState(true);
    const [playFailure, { stop: stopFailure }] = useSound('/sound/grust.mp3');
    const [playSuccess, { stop: stopSuccess }] = useSound('/sound/pedro.mp3');

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
    }

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
                    ? <RespMessage ans={success} willThereBe={willBeThere}/>
                    : <InterrogationForm inviteInfo={inviteInfo} inviteId={inviteId} onRespForm={onRespForm} singleGuest={singleGuest}/>}
            </Fade>
            <SectionTwoComponent/>
        </>

    );
};