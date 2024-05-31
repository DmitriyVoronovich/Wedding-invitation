import React from 'react';
import s from "../interrogation-form/interrogation-form.module.scss";
import Radio from "antd/lib/radio";
import {PresentOnSecondDayComponentProps} from "../types";
import {RadioInput, SelectInputItem} from "@components";
export const PresentOnSecondDayComponent = ({
                                                secondDayList,
                                                onSecondDayListChange,
                                                presentOnSecondDayInit,
                                                singleGuest,
                                                options,
                                                show,
                                                inviteInfo
                                            }: PresentOnSecondDayComponentProps) => (
    <>
        {singleGuest
            ? <>
                <h3 className={s.item_title}>Будете ли Вы на втором дне нашего
                    торжества?</h3>
                <RadioInput initialValue={presentOnSecondDayInit}
                            requiredValue={true}
                            requiredMessage={'Пожалуйста, выберете вариант'}
                            itemName={'presentOnSecondDay'}>
                    <Radio.Button value={"yes"}>Буду</Radio.Button>
                    <Radio.Button value={'no'}>Не буду</Radio.Button>
                </RadioInput>
            </>
            :
            <>
                <h3 className={s.item_title}>Будете ли Вы на втором дне нашего
                    торжества?</h3>
                <div className={s.item_content_wrapper}>
                    <RadioInput initialValue={presentOnSecondDayInit}
                                requiredValue={show}
                                callback={onSecondDayListChange}
                                itemName={'presentOnSecondDay'}
                                value={secondDayList}>
                        <Radio.Button value="yes">Будем</Radio.Button>
                        <Radio.Button value="no">Не будем</Radio.Button>
                        <Radio.Button value="any">Будем частично</Radio.Button>
                    </RadioInput>
                    {secondDayList === 'any' &&
                        <SelectInputItem itemName={"presentOnSecondDaySelect"}
                                         initialValue={inviteInfo?.surveyResponses?.presentOnSecondDay}
                                         requiredValue={show}
                                         optionsValue={options}
                                         placeholderValue={"Пожалуйста, выберете кто будет присутствовать"}
                        />
                    }
                </div>
            </>
        }
    </>
);