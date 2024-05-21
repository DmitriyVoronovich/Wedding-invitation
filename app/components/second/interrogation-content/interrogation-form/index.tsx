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

    const [form] = Form.useForm();

    const options: SelectProps['options'] = [{
        label: 'Яхимчик Татьяна',
        value: 'Яхимчик Татьяна',
    }, {
        label: 'Яхимчик Каролина',
        value: 'Яхимчик Каролина',
    }];

    const onFormLayoutChange = (e: any) => {
        setFormLayout(e.target.value);
    };
    const onLayoutChange = (e: any) => {
        setLayout(e.target.value);
    };

    const onFinish: FormProps<any>['onFinishFailed'] = (value: any) => {
        console.log('Success:', value);
    };

    return (
        <section className={s.section_container}>
            <div className={s.container}>
                <h2 className={s.section_title}>Ответьте на несколько вопросов</h2>
                <Form form={form} className={s.section_form} onFinish={onFinish}>
                    {moreThenOne ? <Form.Item name="presentGuests" className={s.form_item}>
                            <h3 className={s.item_title}>Будете ли вы присутствовать на нашем торжестве?</h3>
                            <Radio.Group className={s.item_radio_group}>
                                <Radio.Button value="yes">Буду</Radio.Button>
                                <Radio.Button value="no">Не буду</Radio.Button>
                            </Radio.Group>
                        </Form.Item> :
                        <Form.Item name="presentGuests" className={s.form_item}>
                            <h3 className={s.item_title}>Будете ли вы присутствовать на нашем торжестве?</h3>
                            <div className={s.item_content_wrapper}>
                                <Radio.Group className={s.item_radio_group} defaultValue={formLayout}
                                             onChange={onFormLayoutChange}>
                                    <Radio.Button value="yes">Буду</Radio.Button>
                                    <Radio.Button value="no">Не буду</Radio.Button>
                                    <Radio.Button value="any">Будем частично</Radio.Button>
                                </Radio.Group>
                                {formLayout === 'any' && <Select
                                    mode="multiple"
                                    allowClear
                                    className={s.item_selector}
                                    placeholder="Пожалуйста, выберете кто будет присутствовать"
                                    options={options}
                                />}
                            </div>
                        </Form.Item>}
                    <Form.Item name="startPlace" className={s.form_item}>
                        <h3 className={s.item_title}>Будете ли вы присутствовать на венчании или же сразу отправитесь на
                            банкет?</h3>
                        <Radio.Group className={s.item_radio_group}>
                            <Radio.Button value="chirch">Будeм присутствовать на венчании</Radio.Button>
                            <Radio.Button value="inline">Сразу отправимся на банкет</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="isPrivateTransport" className={s.form_item}>
                        <h3 className={s.item_title}>Как Вы планируете добираться?</h3>
                        <Radio.Group className={s.item_radio_group}>
                            <Radio.Button value="horizontal">Транспортом молодых на венчание,
                                а затем на банкет</Radio.Button>
                            <Radio.Button value="inline">Личным транспортом</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    {moreThenOne ? <Form.Item name="presentOnSecondDay" className={s.form_item}>
                            <h3 className={s.item_title}>Будете ли Вы на втором дне нашего торжества?</h3>
                            <Radio.Group className={s.item_radio_group}>
                                <Radio.Button value="yes">Буду</Radio.Button>
                                <Radio.Button value="no">Не буду</Radio.Button>
                            </Radio.Group>
                        </Form.Item> :
                        <Form.Item name="presentOnSecondDay" className={s.form_item}>
                            <h3 className={s.item_title}>Будете ли Вы на втором дне нашего торжества?</h3>
                            <div className={s.item_content_wrapper}>
                                <Radio.Group className={s.item_radio_group} defaultValue={layout}
                                             onChange={onLayoutChange}>
                                    <Radio.Button value="yes">Буду</Radio.Button>
                                    <Radio.Button value="no">Не буду</Radio.Button>
                                    <Radio.Button value="any">Будем частично</Radio.Button>
                                </Radio.Group>
                                {layout === 'any' && <Select
                                    mode="multiple"
                                    allowClear
                                    className={s.item_selector}
                                    placeholder="Пожалуйста, выберете кто будет присутствовать"
                                    options={options}
                                />}
                            </div>
                        </Form.Item>}
                    <Form.Item name="needSleepPlace" className={s.form_item}>
                        <h3 className={s.item_title}>Нужен ли ночлег?</h3>
                        <Radio.Group className={s.item_radio_group}>
                            <Radio.Button value="yes">Нужен</Radio.Button>
                            <Radio.Button value="no">Не нужен</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="likeDrinks" className={s.form_item}>
                        <h3 className={s.item_title}>Какие напитки Вы предпочитаете?</h3>
                        <Select
                            mode="multiple"
                            allowClear
                            className={s.item_selector}
                            style={{width: '450px'}}
                            placeholder="Пожалуйста выберете напитки"
                            options={alcoholicDrinks}
                        />
                    </Form.Item>
                    <div className={s.button_wrapper}>
                        <Form.Item>
                            <Button className={s.description_button} htmlType="submit">Сохранить результат</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button className={s.description_button} htmlType="reset">Стереть результат</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </section>
    );
};