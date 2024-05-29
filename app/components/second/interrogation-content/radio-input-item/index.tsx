import React from 'react';
import s from "@/app/components/second/interrogation-content/interrogation-form/interrogation-form.module.scss";
import {Form} from "antd";
import Radio from "antd/lib/radio";
import {RadioInputItemProps} from "@/app/components/second/interrogation-content/types";

export const RadioInput = ({
                               requiredValue,
                               initialValue,
                               callback,
                               children,
                               itemName,
                               requiredMessage,
                               value
                           }: RadioInputItemProps) => {
    return (
        <Form.Item name={itemName} className={s.form_item} rules={[{required: requiredValue, message: requiredMessage}]}
                   initialValue={initialValue}>
            <Radio.Group className={s.item_radio_group}
                         onChange={(e) => callback ? callback(e) : ''}
                         value={value}>
                {children}
            </Radio.Group>
        </Form.Item>
    );
};