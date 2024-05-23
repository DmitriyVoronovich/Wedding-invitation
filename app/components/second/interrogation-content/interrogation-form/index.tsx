import React, {useState} from 'react';
import {Button, Form, FormProps, Select} from "antd";
import Radio from 'antd/lib/radio';
import {SelectProps} from "antd/lib";
import {alcoholicDrinks} from "@/app/constant/constant";
import s from "./interrogation-form.module.scss";
import './interrogation-form.css'

export const InterrogationForm = () => {
    const [moreThenOne, setMoreThenOne] = useState(false)
    const [formLayout, setFormLayout] = useState('');
    const [layout, setLayout] = useState('');
    const [selectedDrink, setSelectedDrink] = useState([]);
    const [show, setShow] = useState(true)
    const [disabled, setDisabled] = useState(true)

    const [form] = Form.useForm();

    const onShowAllQuestion = (e: any) => {
        if (e.target.value === 'no') {
            setShow(false)
            setDisabled(false)
        } else {
            setShow(true)
        }

    }
    const onDrinkChange = (value: any) => {
        setSelectedDrink(value);

    }

    const options: SelectProps['options'] = [{
        label: 'Яхимчик Татьяна',
        value: 'Яхимчик Татьяна',
    }, {
        label: 'Яхимчик Каролина',
        value: 'Яхимчик Каролина',
    }];

    const onFormLayoutChange = (e: any) => {
        setFormLayout(e.target.value);
        onShowAllQuestion(e)
    };
    const onLayoutChange = (e: any) => {
        setLayout(e.target.value);
    };

    const onFinish: FormProps['onFinish'] = (value: any) => {

        if (value.presentGuests === 'no') {
            console.log({
                presentGuests: [],
                startPlace: undefined,
                isPrivateTransport: undefined,
                presentOnSecondDay: undefined,
                needSleepPlace: undefined,
                likeDrinks: undefined
            })
        } else {
            console.log(value)
            console.log({
                presentGuests: value.presentGuests === 'yes' ? options : value.presentGuestsSelect,
                startPlace: value.startPlace,
                isPrivateTransport: value.isPrivateTransport,
                presentOnSecondDay: value.presentOnSecondDay === 'yes' ? options : value.presentOnSecondDaySelect,
                needSleepPlace: value.needSleepPlace,
                likeDrinks: value.likeDrinks
            })
        }
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

    return (
        <section className={s.section_container}>
            <div className={s.container}>
                <h2 className={s.section_title}>Ответьте на несколько вопросов</h2>
                <Form form={form} className={s.section_form} onFinish={onFinish} onChange={onFormValueChange}>
                    {moreThenOne
                        ? <>
                            <h3 className={s.item_title}>Будете ли вы присутствовать на нашем торжестве?</h3>
                            <Form.Item name="presentGuests" className={s.form_item} required={show}>
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
                            <Form.Item name="presentGuests" className={s.form_item} required={show}>
                                <div className={s.item_content_wrapper}>
                                    <Radio.Group className={s.item_radio_group}
                                                 onChange={onFormLayoutChange}
                                                 value={formLayout}>
                                        <Radio.Button value="yes">Буду</Radio.Button>
                                        <Radio.Button value="no">Не буду</Radio.Button>
                                        <Radio.Button value="any">Будем частично</Radio.Button>
                                    </Radio.Group>
                                    {formLayout === 'any' &&
                                        <Form.Item name="presentGuestsSelect" className={s.form_item_select} required={show}>
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
                            </Form.Item>
                        </>}
                    {show &&
                        <>
                            <h3 className={s.item_title}>Будете ли вы присутствовать на венчании или же сразу
                                отправитесь на
                                банкет?</h3>
                            <Form.Item name="startPlace" className={s.form_item} required={show}>
                                <Radio.Group className={s.item_radio_group}>
                                    <Radio.Button value="chirch">Будeм присутствовать на венчании</Radio.Button>
                                    <Radio.Button value="manor">Сразу отправимся на банкет</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <h3 className={s.item_title}>Как Вы планируете добираться?</h3>
                            <Form.Item name="isPrivateTransport" className={s.form_item} required={show}>
                                <Radio.Group className={s.item_radio_group}>
                                    <Radio.Button value={false}>Транспортом молодых на венчание,
                                        а затем на банкет</Radio.Button>
                                    <Radio.Button value={true}>Личным транспортом</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            {moreThenOne
                                ? <>
                                    <h3 className={s.item_title}>Будете ли Вы на втором дне нашего торжества?</h3>
                                    <Form.Item name="presentOnSecondDay" className={s.form_item} required={show}>
                                        <Radio.Group className={s.item_radio_group}>
                                            <Radio.Button value={true}>Буду</Radio.Button>
                                            <Radio.Button value={false}>Не буду</Radio.Button>
                                        </Radio.Group>
                                    </Form.Item>
                                </>
                                :
                                <>
                                    <h3 className={s.item_title}>Будете ли Вы на втором дне нашего торжества?</h3>
                                    <Form.Item name="presentOnSecondDay" className={s.form_item} required={show}>
                                        <div className={s.item_content_wrapper}>
                                            <Radio.Group className={s.item_radio_group}
                                                         onChange={onLayoutChange}
                                                         value={layout}>
                                                <Radio.Button value="yes">Буду</Radio.Button>
                                                <Radio.Button value="no">Не буду</Radio.Button>
                                                <Radio.Button value="any">Будем частично</Radio.Button>
                                            </Radio.Group>
                                            {layout === 'any' &&
                                                <Form.Item name="presentOnSecondDaySelect" className={s.form_item_select}
                                                           required={show}>
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
                                    </Form.Item>
                                </>
                            }
                            <h3 className={s.item_title}>Какие напитки Вы предпочитаете?</h3>
                            <Form.Item name="likeDrinks" className={s.form_item} required={show}>
                                <Select
                                    mode="multiple"
                                    allowClear
                                    className={s.item_selector}
                                    style={{width: '450px'}}
                                    placeholder="Пожалуйста выберете напитки"
                                    options={alcoholicDrinks}
                                    onChange={onDrinkChange}
                                />
                            </Form.Item>
                            <h3 className={s.item_title}>Нужен ли ночлег?</h3>
                            <Form.Item name="needSleepPlace" className={s.form_item} required={show}>
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
                </Form>
            </div>
        </section>
    );
};