import React, {useEffect, useState} from 'react';
import {Button, Form, FormProps, Select} from "antd";
import Radio from 'antd/lib/radio';
import {SelectProps} from "antd/lib";
import {alcoholicDrinks} from "@/app/constant/constant";
import s from "./interrogation-form.module.scss";
import './interrogation-form.css'
import {surveyResponse} from "@/app/service/api/invitePreload.api";

export const InterrogationForm = ({inviteInfo, inviteId, onRespForm}: any) => {
    const [firstDayList, setFirstDayList] = useState('');
    const [secondDayList, setSecondDayList] = useState('');
    const [show, setShow] = useState(!!inviteInfo.surveyResponses);
    const [disabled, setDisabled] = useState(true);
    const [surveyCompleted, setSurveyCompleted] = useState(!inviteInfo.surveyResponses);

    const [form] = Form.useForm();

    const guestGroup = inviteInfo.guests

    const options: SelectProps['options'] = guestGroup?.map((item: any) => {
        return {
            label: `${item.lastName} ${item.firstName}`,
            value: item.inviteId,
        }
    })

    const onShowAllQuestion = (e: any) => {
        if (e.target.value === 'no') {
            setShow(false)
            setDisabled(false)
        } else {
            setShow(true)
        }
    }

    const onFirstDayList = (e: any) => {
        setFirstDayList(e.target.value);
        onShowAllQuestion(e)
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
            onRespForm(!surveyResp.error);

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
            onRespForm(!surveyResp.error);
        }

        setSurveyCompleted(false)
    };

    const onFormValueChange = () => {
        if (form.getFieldsValue().presentGuests === 'no') {
            setDisabled(false)
        } else {
            setDisabled(checkFields(form.getFieldsValue()));
        }
    }

    const checkFields = (obj: any) => {
        return Object.values(obj).some(value => value === undefined || value === '');
    };

    const onChangeCompletedSurvey = () => {
        setSurveyCompleted(true)
        setDisabled(false)
    };

    const presentInitialValue = (paramName: string) => {
        let resultValue;
        if (!inviteInfo[paramName]) {
            return ''
        }
        if (!inviteInfo.surveyResponses[paramName].length) {
            resultValue = 'no';
        } else {
            resultValue = inviteInfo.surveyResponses[paramName].length === inviteInfo.guests.length ? 'yes' : 'any';
        }

        return resultValue
    }

    useEffect(() => {
        setFirstDayList(presentInitialValue('presentGuests'))
        setSecondDayList(presentInitialValue('presentOnSecondDay'))
    }, []);

    const presentGuestInit = presentInitialValue('presentGuests');
    const presentOnSecondDayInit = presentInitialValue('presentOnSecondDay');

    return (
        <section className={s.section_container}>
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
                        {guestGroup.length === 1
                            ? <>
                                <h3 className={s.item_title}>Будете ли вы присутствовать на нашем торжестве?</h3>
                                <Form.Item name="presentGuests" className={s.form_item} rules={[{required: show}]}
                                           initialValue={presentGuestInit}>
                                    <Radio.Group className={s.item_radio_group}
                                                 onChange={(e) => onShowAllQuestion(e)}>
                                        <Radio.Button value="yes">Буду</Radio.Button>
                                        <Radio.Button value="no">Не буду</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </>
                            :
                            <>
                                <h3 className={s.item_title}>Будете ли вы присутствовать на нашем торжестве?</h3>
                                <div className={s.item_content_wrapper}>
                                    <Form.Item name="presentGuests" className={s.form_item} rules={[{required: show}]}
                                               initialValue={presentGuestInit}>
                                        <Radio.Group className={s.item_radio_group}
                                                     onChange={onFirstDayList}
                                                     value={firstDayList}>
                                            <Radio.Button value="yes">Буду</Radio.Button>
                                            <Radio.Button value="no">Не буду</Radio.Button>
                                            <Radio.Button value="any">Будем частично</Radio.Button>
                                        </Radio.Group>
                                    </Form.Item>
                                    {firstDayList === 'any' &&
                                        <Form.Item name="presentGuestsSelect" className={s.form_item_select}
                                                   required={show}
                                                   initialValue={inviteInfo?.surveyResponses?.presentGuests}>
                                            <Select
                                                style={{width: '450px'}}
                                                mode="multiple"
                                                allowClear
                                                className={s.item_selector}
                                                placeholder="Пожалуйста, выберете кто будет присутствовать"
                                                options={options}
                                            />
                                        </Form.Item>}
                                </div>
                            </>}

                        {show &&
                            <>
                                <h3 className={s.item_title}>Будете ли вы присутствовать на венчании или же сразу
                                    отправитесь на
                                    банкет?</h3>
                                <Form.Item name="startPlace" className={s.form_item}
                                           rules={[{required: true, message: 'Пожалуйста, выберете вариант'}]}
                                           initialValue={inviteInfo?.surveyResponses?.startPlace}>
                                    <Radio.Group className={s.item_radio_group}>
                                        <Radio.Button value="church">Будeм присутствовать на венчании</Radio.Button>
                                        <Radio.Button value="manor">Сразу отправимся на банкет</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                <h3 className={s.item_title}>Как Вы планируете добираться?</h3>
                                <Form.Item name="isPrivateTransport" className={s.form_item}
                                           rules={[{required: true, message: 'Пожалуйста, выберете вариант'}]}
                                           initialValue={inviteInfo?.surveyResponses?.isPrivateTransport}>
                                    <Radio.Group className={s.item_radio_group}>
                                        <Radio.Button value={false}>Транспортом молодых на венчание,
                                            а затем на банкет</Radio.Button>
                                        <Radio.Button value={true}>Личным транспортом</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                                {guestGroup.length === 1
                                    ? <>
                                        <h3 className={s.item_title}>Будете ли Вы на втором дне нашего торжества?</h3>
                                        <Form.Item name="presentOnSecondDay" className={s.form_item}
                                                   rules={[{required: true, message: 'Пожалуйста, выберете вариант'}]}
                                                   initialValue={presentOnSecondDayInit}>
                                            <Radio.Group className={s.item_radio_group}>
                                                <Radio.Button value={true}>Буду</Radio.Button>
                                                <Radio.Button value={false}>Не буду</Radio.Button>
                                            </Radio.Group>
                                        </Form.Item>
                                    </>
                                    :
                                    <>
                                        <h3 className={s.item_title}>Будете ли Вы на втором дне нашего торжества?</h3>
                                        <div className={s.item_content_wrapper}>
                                            <Form.Item name="presentOnSecondDay" className={s.form_item} required={show}
                                                       initialValue={presentOnSecondDayInit}>
                                                <Radio.Group className={s.item_radio_group}
                                                             onChange={onSecondDayListChange}
                                                             value={secondDayList}>
                                                    <Radio.Button value="yes">Буду</Radio.Button>
                                                    <Radio.Button value="no">Не буду</Radio.Button>
                                                    <Radio.Button value="any">Будем частично</Radio.Button>
                                                </Radio.Group>
                                            </Form.Item>
                                            {secondDayList === 'any' &&
                                                <Form.Item name="presentOnSecondDaySelect"
                                                           className={s.form_item_select}
                                                           required={show}
                                                           initialValue={inviteInfo?.surveyResponses?.presentOnSecondDay}>
                                                    <Select
                                                        style={{width: '450px'}}
                                                        mode="multiple"
                                                        allowClear
                                                        className={s.item_selector}
                                                        placeholder="Пожалуйста, выберете кто будет присутствовать"
                                                        options={options}
                                                    />
                                                </Form.Item>}
                                        </div>
                                    </>
                                }
                                <h3 className={s.item_title}>Какие напитки Вы предпочитаете?</h3>
                                <Form.Item name="likeDrinks" className={s.form_item}
                                           rules={[{required: true, message: 'Пожалуйста, выберете вариант'}]}
                                           initialValue={inviteInfo?.surveyResponses?.likeDrinks}>
                                    <Select
                                        mode="multiple"
                                        allowClear
                                        className={s.item_selector}
                                        style={{width: '450px'}}
                                        placeholder="Пожалуйста выберете напитки"
                                        options={alcoholicDrinks}
                                    />
                                </Form.Item>
                                <h3 className={s.item_title}>Нужен ли ночлег?</h3>
                                <Form.Item name="needSleepPlace" className={s.form_item}
                                           rules={[{required: true, message: 'Пожалуйста, выберете вариант'}]}
                                           initialValue={inviteInfo?.surveyResponses?.needSleepPlace}>
                                    <Radio.Group className={s.item_radio_group}>
                                        <Radio.Button value={true}>Нужен</Radio.Button>
                                        <Radio.Button value={false}>Не нужен</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </>}
                        <div className={s.button_wrapper}>
                            <Form.Item>
                                <Button className={s.description_button} htmlType="submit"
                                        disabled={disabled}>Сохранить</Button>
                            </Form.Item>
                        </div>
                    </Form>}
            </div>
        </section>
    );
};
