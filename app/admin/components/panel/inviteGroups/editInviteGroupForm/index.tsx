import {Button, Checkbox, Form, FormProps, Input, Select} from 'antd';
import {CreateOrEditInviteGroup, Invitation, InviteGroup} from "@/types/inviteGroups.type";
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
            <Form.Item<CreateOrEditInviteGroup>
                label="Guests"
                name="updateGuests"
                rules={[{required: true, message: 'Please input guests!'}]}
            >
                <Select defaultValue={editInviteGroup?.guests.map(item => item.id)}
                        mode="multiple"
                        allowClear options={guestsWithoutInviteGroup.map(item => ({
                    value: item.id,
                    label: `${item.firstName} ${item.lastName}`
                }))}/>
            </Form.Item>
            <Form.Item<CreateOrEditInviteGroup>
                name="invitation"
                wrapperCol={{offset: 8, span: 16}}
                initialValue={{checkSlip: false, checkTransport: false} as Invitation}
                valuePropName="checked"
            >
                <Checkbox name={'checkSlip'}>Guest need a place to sleep</Checkbox>
                <Checkbox name={'checkTransport'}>Guest needs transport</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
