import {TableProps} from "antd/lib";
import {Guest, InviteGroup} from "@types";
import {TableColumnType} from "antd";
import {LastChangeCell} from "@admin-components";

export const SurveyResponseColumns: (getColumnSearchProps: () => TableColumnType<InviteGroup>) => TableProps<InviteGroup>["columns"] =
    (getColumnSearchProps: () => TableColumnType<InviteGroup>): TableProps<InviteGroup>['columns'] =>
        ([
            {
                title: 'Group Name',
                dataIndex: 'groupName',
                key: 'groupName',
                ...getColumnSearchProps(),
            },
            {
                title: 'Present on first day',
                dataIndex: ['surveyResponses', 'presentGuests'],
                key: 'inviteGroup',
                width: 200,
                render: (_, inviteGroup: InviteGroup) => {
                    if (!inviteGroup.surveyResponses?.presentGuests.length) {
                        return 'No'
                    }

                    const presentOnSecondDay = inviteGroup.guests
                        .filter(({id}: Guest) => inviteGroup.surveyResponses.presentGuests?.includes(id));

                    return <>
                        {presentOnSecondDay
                            .map(({
                                      firstName,
                                      lastName
                                  }: Guest) => (
                                <p key={firstName}>{firstName} {lastName}</p>))}
                    </>
                },
                filters: [
                    {
                        text: 'Will be present',
                        value: 'full',
                    },
                    {
                        text: 'Will not be present',
                        value: 'empty',
                    },
                    {
                        text: 'Partially present',
                        value: 'partial',
                    }
                ],
                onFilter: (value, inviteGroup) => {
                    if (value === 'empty') {
                        return !inviteGroup.surveyResponses?.presentGuests.length
                    }

                    return value === 'full'
                        ? inviteGroup.surveyResponses?.presentGuests.length === inviteGroup.guests.length
                        : inviteGroup.surveyResponses?.presentGuests.length < inviteGroup.guests.length;

                },
            },
            {
                title: 'no alone',
                key: 'noAlone',
                render: (_, inviteGroup: InviteGroup) => inviteGroup.surveyResponses?.noAlonePresent ? 'yes' : `no`
            },
            {
                title: 'Present on second day',
                dataIndex: ['surveyResponses', 'presentOnSecondDay'],
                key: 'inviteGroup',
                width: 200,
                render: (_, inviteGroup: InviteGroup) => {
                    if (!inviteGroup.surveyResponses?.presentOnSecondDay?.length) {
                        return `Won't be`
                    }

                    const presentOnSecondDay = inviteGroup.guests
                        .filter(({id}: Guest) => inviteGroup.surveyResponses.presentOnSecondDay?.includes(id));

                    return <>
                        {presentOnSecondDay
                            .map(({
                                      firstName,
                                      lastName
                                  }: Guest) => (
                                <p key={firstName}>{firstName} {lastName}</p>))}
                    </>
                },
                filters: [
                    {
                        text: 'Will be present',
                        value: 'full',
                    },
                    {
                        text: 'Will not be present',
                        value: 'empty',
                    },
                    {
                        text: 'Partially present',
                        value: 'partial',
                    }
                ],
                onFilter: (value, inviteGroup) => {
                    if (value === 'empty') {
                        return !inviteGroup.surveyResponses?.presentOnSecondDay?.length
                    }

                    return value === 'full'
                        ? inviteGroup.surveyResponses?.presentOnSecondDay?.length === inviteGroup.guests.length
                        : (inviteGroup.surveyResponses?.presentOnSecondDay?.length || 0) < inviteGroup.guests.length;

                },
            },
            {
                title: 'no alone on second day',
                key: 'noAloneOnSecondDay',
                render: (_, inviteGroup: InviteGroup) => inviteGroup.surveyResponses?.noAloneOnSecondDay  ? 'yes' : `no`
            },
            {
                title: 'Start place',
                key: 'transportFrom',
                filters: [
                    {
                        text: 'Church',
                        value: 'church',
                    },
                    {
                        text: 'Manor',
                        value: 'manor',
                    },
                    {
                        text: 'Skip',
                        value: 'skip',
                    },
                ],
                onFilter: (value, inviteGroup) => inviteGroup.surveyResponses?.startPlace === value,
                render: (_, inviteGroup: InviteGroup) => inviteGroup.surveyResponses?.startPlace || `Don't filled`
            },
            {
                title: 'Need transport',
                dataIndex: ['surveyResponses', 'isPrivateTransport'],
                key: 'isPrivateTransport',
                filters: [
                    {
                        text: 'Private',
                        value: true,
                    },
                    {
                        text: 'Non private',
                        value: false,
                    },
                ],
                onFilter: (value, inviteGroup) => inviteGroup.surveyResponses?.isPrivateTransport === value,
                render: (_, inviteGroup: InviteGroup) => inviteGroup.surveyResponses
                    ? inviteGroup.surveyResponses?.isPrivateTransport ? 'Private' : 'Non private'
                    : `Don't filled`
            },
            {
                title: 'Start place',
                key: 'likeDrinks',
                render: (_, inviteGroup: InviteGroup) => inviteGroup.surveyResponses?.likeDrinks
                    ? <div>
                        {inviteGroup.surveyResponses?.likeDrinks?.map(drink => <p key={drink}>{drink}</p>)}
                    </div>
                    : `Don't filled`
            },
            // {
            //     title: 'Last changed survey',
            //     key: 'lastSeen',
            //     render: (_, inviteGroup: InviteGroup) => inviteGroup?.surveyResponses
            //         ? <LastChangeCell objectData={inviteGroup.surveyResponses}/>
            //         : `Don't filled`
            // }
        ]);
