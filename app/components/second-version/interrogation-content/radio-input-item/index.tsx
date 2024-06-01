import React from 'react';
import s from "../interrogation-form/interrogation-form.module.scss";
import {Form} from "antd";
import Radio from "antd/lib/radio";
import {RadioInputItemProps} from "@components/second-version-version/interrogation-content/types";

export const RadioInput = ({
                               requiredValue,
                               initialValue,
                               callback,
                               children,
                               itemName,
                               requiredMessage,
                               value
                           }: RadioInputItemProps) => (
    <Form.Item name={itemName} className={s.form_item} rules={[{required: requiredValue, message: requiredMessage}]}
               initialValue={initialValue}>
        <Radio.Group className={s.item_radio_group}
                     onChange={(e) => callback ? callback(e) : ''}
                     value={value}>
            {children}
        </Radio.Group>
    </Form.Item>
);