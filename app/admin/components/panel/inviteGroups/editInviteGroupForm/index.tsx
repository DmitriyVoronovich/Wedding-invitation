import {Button, Checkbox, Form, FormProps, Input, Select} from 'antd';
import {ChangedGuests, CreateOrEditInviteGroup, Invitation, InviteGroup} from "@/types/inviteGroups.type";
import {useEffect, useState} from "react";
import {getAllGuestsWithoutInviteGroup} from "@api";
import {useAdminAccessToken} from "@hooks";


const onFinishFailed: FormProps<CreateOrEditInviteGroup>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export const CreateOrEditInviteGroupForm = ({editInviteGroup, handleSubmitForm}: {
    editInviteGroup?: InviteGroup,
    handleSubmitForm: (editedInviteGroup: CreateOrEditInviteGroup) => void
}) => {
    const accessToken = useAdminAccessToken();
    const [guestsWithoutInviteGroup, setGuestsWithoutInviteGroup] = useState([...(editInviteGroup?.guests || [])])

    useEffect(() => {
        const getGuestsWithoutInviteGroup = async () => {
            const res = (await getAllGuestsWithoutInviteGroup(accessToken) || [])
            setGuestsWithoutInviteGroup(guests => [...guests, ...res])
        };
        getGuestsWithoutInviteGroup();
    }, [])
    const onFinish: FormProps<CreateOrEditInviteGroup>['onFinish'] = (values) => {
        handleSubmitForm(values);
    }

    const handleChange = (value: any) => {
        console.log(`selected ${value}`);
    };


    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            initialValues={editInviteGroup || {} as InviteGroup}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<CreateOrEditInviteGroup>
                label="group Name"
                name="groupName"
                rules={[{required: true, message: 'Please input your group name!'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item<ChangedGuests>
                label="Guests"
                name="updatedGuests"
                rules={[{required: true, message: 'Please input guests!'}]}
            >
                <Select defaultValue={editInviteGroup?.guests.map(item => item.id)} onSelect={handleChange}
                        mode="multiple"
                        allowClear options={guestsWithoutInviteGroup.map(item => ({
                    value: item.id,
                    label: `${item.firstName} ${item.lastName}`
                }))}/>
            </Form.Item>
            <Form.Item<Invitation>
                name="checkSlip"
                wrapperCol={{offset: 8, span: 16}}
                initialValue={false}
                valuePropName="checked"
            >
                <Checkbox>Guest need a place to sleep</Checkbox>
            </Form.Item>
            <Form.Item<Invitation>
                name="checkTransport"
                wrapperCol={{offset: 8, span: 16}}
                initialValue={false}
                valuePropName="checked"
            >
                <Checkbox>Guest needs transport</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
