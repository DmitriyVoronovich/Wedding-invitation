import React, {useEffect, useState} from 'react';
import {Button, Form, FormProps} from "antd";
import Radio from 'antd/lib/radio';
import {SelectProps} from "antd/lib";
import {alcoholicDrinks} from "@/app/constant/constant";
import s from "./interrogation-form.module.scss";
import './interrogation-form.css'
import {surveyResponse} from "@/app/service/api/invitePreload.api";
import {RadioInput} from "@/app/components/second/interrogation-content/radio-input-item";
import {SelectInputItem} from "@/app/components/second/interrogation-content/select-input-item";
import {PresentGuestComponent} from "@/app/components/second/interrogation-content/present-guest-component";
import PresentOnSecondDayComponent from "@/app/components/second/interrogation-content/present-on-second-day-component";
import {presentInitialValue} from "@/app/components/second/interrogation-content/interrogation-form/utils";

export const InterrogationForm = ({inviteInfo, inviteId, onRespForm, singleGuest}: any) => {
    const [firstDayList, setFirstDayList] = useState('');
    const [secondDayList, setSecondDayList] = useState('');
    const [show, setShow] = useState(!!inviteInfo.surveyResponses && inviteInfo.surveyResponses?.presentGuests.length);
    const [disabled, setDisabled] = useState(true);
    const [surveyCompleted, setSurveyCompleted] = useState(!inviteInfo.surveyResponses);
    const [form] = Form.useForm();

    const guestGroup = inviteInfo.guests;

    const options: SelectProps['options'] = guestGroup?.map((item: any) => {
        return {
            label: `${item.lastName} ${item.firstName}`,
            value: item.inviteId,
        }
    });

    const onShowAllQuestion = (e: any) => {
        if (e.target.value === 'no') {
            setShow(false)
            setDisabled(false)
        } else {
            setShow(true)
        }
    };

    const onFirstDayList = (e: any) => {
        setFirstDayList(e.target.value);
        onShowAllQuestion(e);
    };
    const onSecondDayListChange = (e: any) => {
        setSecondDayList(e.target.value);
    };

    const onFinish: FormProps['onFinish'] = async (value: any) => {

        if (value.presentGuests === 'no') {
            const answer = {
                inviteId: inviteId,
                presentGuests: [],
            }
            const surveyResp = await surveyResponse(answer);
            onRespForm(!surveyResp.error, false);

        } else {
            const answer = {
                inviteId: inviteId,
                presentGuests: value.presentGuests === 'yes' ? options?.map(({value}) => value) : value.presentGuestsSelect,
                startPlace: value.startPlace,
                isPrivateTransport: value.isPrivateTransport,
                presentOnSecondDay: value.presentOnSecondDay === 'yes' ? options?.map(({value}) => value) : value.presentOnSecondDay === 'no' ? [] : value.presentOnSecondDaySelect,
                needSleepPlace: value.needSleepPlace,
                likeDrinks: value.likeDrinks
            }
            const surveyResp = await surveyResponse(answer);
            onRespForm(!surveyResp.error, true);
        }


        setSurveyCompleted(false);
    };

    const onFormValueChange = () => {
        if (form.getFieldsValue().presentGuests === 'no') {
            setDisabled(false)
        } else {
            setDisabled(checkFields(form.getFieldsValue()));
        }
    };

    const checkFields = (obj: any) => {
        return Object.values(obj).some(value => value === undefined || value === '');
    };

    const onChangeCompletedSurvey = () => {
        setSurveyCompleted(true)
        setDisabled(false)
    };

    useEffect(() => {
        setFirstDayList(presentInitialValue(inviteInfo, 'presentGuests'))
        setSecondDayList(presentInitialValue(inviteInfo, 'presentOnSecondDay'))
    }, []);

    const presentGuestInit = presentInitialValue(inviteInfo, 'presentGuests');
    const presentOnSecondDayInit = presentInitialValue(inviteInfo, 'presentOnSecondDay');

    return (
        <section className={s.section_container} id={'survey'}>
            <div className={s.container}>
                {surveyCompleted
                    ? <h2 className={s.section_title}>Ответьте на несколько вопросов</h2>
                    : <div className={s.completed_content_wrapper}>
                        <h2 className={s.section_title}>Вы уже ответили на вопросы, но если желаете, можете
                            изменить свой ответ</h2>
                        <Button className={s.description_button} onClick={onChangeCompletedSurvey}>Изменить
                            ответ</Button>
                    </div>}
                {surveyCompleted &&
                    <Form form={form} className={s.section_form} onFinish={onFinish} onChange={onFormValueChange}>
                        <PresentGuestComponent singleGuest={singleGuest}
                                               presentGuestInit={presentGuestInit}
                                               show={show}
                                               options={options}
                                               onShowAllQuestion={onShowAllQuestion}
                                               inviteInfo={inviteInfo}
                                               onFirstDayList={onFirstDayList}
                                               firstDayList={firstDayList}/>
                        {show &&
                            <>
                                <h3 className={s.item_title}>Будете ли вы присутствовать на венчании или же сразу
                                    отправитесь на банкет?</h3>
                                <RadioInput initialValue={inviteInfo?.surveyResponses?.startPlace}
                                            requiredValue={show}
                                            requiredMessage={'Пожалуйста, выберете вариант'}
                                            itemName={'startPlace'}>
                                    <Radio.Button value="church">{singleGuest ? 'Буду' : 'Будем'} присутствовать на
                                        венчании</Radio.Button>
                                    <Radio.Button value="manor">Сразу {singleGuest ? 'отправлюсь' : 'отправимся'} на
                                        банкет</Radio.Button>
                                </RadioInput>
                                {inviteInfo.invitation.checkTransport &&
                                    <>
                                        <h3 className={s.item_title}>Как Вы планируете добираться?</h3>
                                        <RadioInput initialValue={inviteInfo?.surveyResponses?.isPrivateTransport}
                                                    requiredValue={show}
                                                    requiredMessage={'Пожалуйста, выберете вариант'}
                                                    itemName={'isPrivateTransport'}>
                                            <Radio.Button value={false}>Транспортом молодых на венчание,
                                                а затем на банкет</Radio.Button>
                                            <Radio.Button value={true}>Личным транспортом</Radio.Button>
                                        </RadioInput>
                                    </>}
                                <PresentOnSecondDayComponent inviteInfo={inviteInfo}
                                                             presentOnSecondDayInit={presentOnSecondDayInit}
                                                             secondDayList={secondDayList}
                                                             options={options}
                                                             onSecondDayListChange={onSecondDayListChange}
                                                             show={show}
                                                             singleGuest={singleGuest}/>
                                <h3 className={s.item_title}>{singleGuest ? 'Какой напиток' : 'Какие напитки'} Вы
                                    предпочитаете?</h3>
                                <SelectInputItem itemName={"likeDrinks"}
                                                 initialValue={inviteInfo?.surveyResponses?.likeDrinks}
                                                 requiredValue={true}
                                                 optionsValue={alcoholicDrinks}
                                                 requiredMessage={'Пожалуйста, выберете вариант'}
                                                 placeholderValue={`Пожалуйста выберете ${singleGuest ? 'напиток' : 'напитки'}`}
                                />
                                {inviteInfo.invitation.checkSlip &&
                                    <>
                                        <h3 className={s.item_title}>Нужен ли ночлег?</h3>
                                        <RadioInput initialValue={inviteInfo?.surveyResponses?.needSleepPlace}
                                                    requiredValue={true}
                                                    requiredMessage={'Пожалуйста, выберете вариант'}
                                                    callback={onSecondDayListChange}
                                                    itemName={'needSleepPlace'}>
                                            <Radio.Button value={true}>Нужен</Radio.Button>
                                            <Radio.Button value={false}>Не нужен</Radio.Button>
                                        </RadioInput>
                                    </>}
                            </>}
                        <div className={s.button_wrapper}>
                            <Form.Item>
                                <Button className={s.description_button} htmlType="submit"
                                        disabled={disabled}> Сохранить</Button>
                            </Form.Item>
                        </div>
                    </Form>}
            </div>
        </section>
    );
};