import React, {useState} from 'react';
import {Button, Form, FormProps, Select} from "antd";
import Radio from 'antd/lib/radio';
import {SelectProps} from "antd/lib";
import {alcoholicDrinks} from "@/app/constant/constant";
import s from "./interrogation-form.module.scss";
import './interrogation-form.css'

export const InterrogationForm = () => {
    const [moreThenOne, setMoreThenOne] = useState(true)
    const [formLayout, setFormLayout] = useState('yes');
    const [layout, setLayout] = useState('yes');
    const [selectedDrink, setSelectedDrink] = useState([]);

    const onDrinkChange = (value: any) => {
        setSelectedDrink(value);
    }

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

    const onFinish: FormProps['onFinish'] = (value: any) => {
        console.log('Success:', value);
    };

    const handleReset = () => {
        form.resetFields();
    };

    return (
        <section className={s.section_container}>
            <div className={s.container}>
                <h2 className={s.section_title}>Ответьте на несколько вопросов</h2>
                <Form form={form} className={s.section_form} onFinish={onFinish}>
                    {moreThenOne
                        ? <>
                            <h3 className={s.item_title}>Будете ли вы присутствовать на нашем торжестве?</h3>
                            <Form.Item name="presentGuests" className={s.form_item}>
                                <Radio.Group className={s.item_radio_group} value={'yes'}>
                                    <Button value="yes">Буду</Button>
                                    <Button value="no">Не буду</Button>
                                </Radio.Group>
                            </Form.Item>
                        </>
                         :
                        <>
                            <h3 className={s.item_title}>Будете ли вы присутствовать на нашем торжестве?</h3>
                            <Form.Item name="presentGuests" className={s.form_item}>
                                <div className={s.item_content_wrapper}>
                                    <Radio.Group className={s.item_radio_group}
                                                 onChange={onFormLayoutChange}
                                                 value={formLayout}>
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
                            </Form.Item>
                        </>}
                    <h3 className={s.item_title}>Будете ли вы присутствовать на венчании или же сразу отправитесь на
                        банкет?</h3>
                    <Form.Item name="startPlace" className={s.form_item}>
                        <Radio.Group className={s.item_radio_group} value={'chirch'}>
                            <Radio.Button value="chirch">Будeм присутствовать на венчании</Radio.Button>
                            <Radio.Button value="inline">Сразу отправимся на банкет</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <h3 className={s.item_title}>Как Вы планируете добираться?</h3>
                    <Form.Item name="isPrivateTransport" className={s.form_item}>
                        <Radio.Group className={s.item_radio_group}>
                            <Radio.Button value="horizontal">Транспортом молодых на венчание,
                                а затем на банкет</Radio.Button>
                            <Radio.Button value="inline">Личным транспортом</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    {moreThenOne
                        ? <>
                            <h3 className={s.item_title}>Будете ли Вы на втором дне нашего торжества?</h3>
                            <Form.Item name="presentOnSecondDay" className={s.form_item}>
                                <Radio.Group className={s.item_radio_group}>
                                    <Radio.Button value="yes">Буду</Radio.Button>
                                    <Radio.Button value="no">Не буду</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                        </>
                         :
                        <>
                            <h3 className={s.item_title}>Будете ли Вы на втором дне нашего торжества?</h3>
                            <Form.Item name="presentOnSecondDay" className={s.form_item}>
                                <div className={s.item_content_wrapper}>
                                    <Radio.Group className={s.item_radio_group}
                                                 onChange={onLayoutChange}
                                                 value={layout}>
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
                            </Form.Item>
                        </>
                    }
                    <h3 className={s.item_title}>Нужен ли ночлег?</h3>
                    <Form.Item name="needSleepPlace" className={s.form_item}>
                        <Radio.Group className={s.item_radio_group}>
                            <Radio.Button value="yes">Нужен</Radio.Button>
                            <Radio.Button value="no">Не нужен</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <h3 className={s.item_title}>Какие напитки Вы предпочитаете?</h3>
                    <Form.Item name="likeDrinks" className={s.form_item}>
                        <Select
                            mode="multiple"
                            allowClear
                            className={s.item_selector}
                            style={{width: '450px'}}
                            placeholder="Пожалуйста выберете напитки"
                            options={alcoholicDrinks}
                            value={selectedDrink}
                            onChange={onDrinkChange}
                        />
                    </Form.Item>
                    <div className={s.button_wrapper}>
                        <Form.Item>
                            <Button className={s.description_button} htmlType="submit">Сохранить результат</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button className={s.description_button} onClick={handleReset}>Стереть результат</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </section>
    );
};