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
                                    requiredMessage,
                                    onFormValueChange
                                }: SelectInputItemProps) => (
    <Form.Item name={itemName}
               className={s.form_item_select}
               rules={[{required: requiredValue, message: requiredMessage}]}
               initialValue={initialValue}>
        <Select
            maxCount={((maxCountValue || 0) > 1) ? maxCountValue : undefined}
            style={{width: '450px'}}
            mode={(maxCountValue || 0) > 1 ? 'multiple' : undefined}
            showSearch={false}
            onChange={() => onFormValueChange()}
            allowClear
            className={s.item_selector}
            placeholder={placeholderValue}
            options={optionsValue}
        />
    </Form.Item>
);
