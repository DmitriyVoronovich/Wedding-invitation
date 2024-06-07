import s from "../interrogation-form/interrogation-form.module.scss";
import Radio from "antd/lib/radio";
import {RadioInput, SelectInputItem} from "@components";
import {PresentGuestComponentProps} from "../types";

export const PresentGuestComponent = ({
                                          singleGuest,
                                          presentGuestInit,
                                          options,
                                          inviteInfo,
                                          onFirstDayList,
                                          firstDayList,
                                          show,
                                          needOneMorePlace,
                                          onShowAllQuestion,
                                          onFormValueChange
                                      }: PresentGuestComponentProps) => (
    <>
        <h3 className={s.item_title}>Будете ли вы присутствовать на нашем торжестве?</h3>
        {singleGuest
            ? <RadioInput initialValue={presentGuestInit}
                          requiredValue={show}
                          callback={onShowAllQuestion}
                          itemName={'presentGuests'}>
                <Radio.Button value="yes">Буду</Radio.Button>
                {needOneMorePlace &&
                    <Radio.Button value="noAlone">Буду со второй половинкой</Radio.Button>
                }
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
                                         onFormValueChange={onFormValueChange}
                                         maxCountValue={inviteInfo.guests.length - 1}
                                         requiredMessage={'Пожалуйста, выберете вариант'}
                                         placeholderValue={"Пожалуйста, выберете кто будет присутствовать"}
                        />
                    }
                </div>
            </>}
    </>
);
