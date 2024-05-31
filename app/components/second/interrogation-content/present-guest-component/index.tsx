import React from 'react';
import s from "@component/interrogation-content/interrogation-form/interrogation-form.module.scss";
import {RadioInput} from "@component/interrogation-content/radio-input-item";
import Radio from "antd/lib/radio";
import {SelectInputItem} from "@component/interrogation-content/select-input-item";
import {PresentGuestComponentProps} from "@component/interrogation-content/types";

export const PresentGuestComponent = ({
                                          singleGuest,
                                          presentGuestInit,
                                          options,
                                          inviteInfo,
                                          onFirstDayList,
                                          firstDayList,
                                          show,
                                          onShowAllQuestion
                                      }: PresentGuestComponentProps) => (
    <>
        <h3 className={s.item_title}>Будете ли вы присутствовать на нашем торжестве?</h3>
        {singleGuest
            ? <RadioInput initialValue={presentGuestInit}
                          requiredValue={show}
                          callback={onShowAllQuestion}
                          itemName={'presentGuests'}>
                <Radio.Button value="yes">Буду</Radio.Button>
                <Radio.Button value="no">Не буду</Radio.Button>
            </RadioInput>
            : <>
                <div className={s.item_content_wrapper}>
                    <RadioInput initialValue={presentGuestInit}
                                requiredValue={show}
                                callback={onFirstDayList}
                                itemName={'presentGuests'}
                                value={firstDayList}>
                        <Radio.Button value="yes">Будем</Radio.Button>
                        <Radio.Button value="no">Не будем</Radio.Button>
                        <Radio.Button value="any">Будем частично</Radio.Button>
                    </RadioInput>
                    {firstDayList === 'any' &&
                        <SelectInputItem itemName={"presentGuestsSelect"}
                                         initialValue={inviteInfo?.surveyResponses?.presentGuests}
                                         requiredValue={show}
                                         optionsValue={options}
                                         placeholderValue={"Пожалуйста, выберете кто будет присутствовать"}
                        />
                    }
                </div>
            </>}
    </>
);