import s from "../interrogation-form/interrogation-form.module.scss";
import {Form, Select} from "antd";
import {SelectInputItemProps} from "@components";

export const SelectInputItem = ({
                                    requiredValue,
                                    itemName,
                                    placeholderValue,
                                    optionsValue,
                                    maxCountValue,
                                    initialValue,
                                    requiredMessage
                                }: SelectInputItemProps) => (
    <Form.Item name={itemName}
               className={s.form_item_select}
               rules={[{required: requiredValue, message: requiredMessage}]}
               initialValue={initialValue}>
        <Select
            maxCount={maxCountValue}
            style={{width: '450px'}}
            mode="multiple"
            showSearch={false}
            allowClear
            className={s.item_selector}
            placeholder={placeholderValue}
            options={optionsValue}
        />
    </Form.Item>
);
