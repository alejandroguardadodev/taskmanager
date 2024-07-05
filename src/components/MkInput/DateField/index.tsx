import React from 'react'

import styled from 'styled-components';

import DatePicker, { DateObject } from "react-multi-date-picker";

import { FieldValues, UseFormSetValue } from "react-hook-form";

const DateContainer = styled.div`
  flex-grow: 1;
  &>.rmdp-container {
    width: 100%;
    &>input {
      font-family: "Montserrat" !important;
      font-size: 1rem;
      font-weight: 400;
      width: 100%;
      padding: 11px 5px 11px 10px;
      background: transparent;
      border: none !important;
      outline: none !important;
      height: fit-content !important;
      box-shadow: none !important;
    }
  }

  &.disabled {
    &>.rmdp-container>input {
      color: grey;
      background: rgba(0, 0, 0, .05);
    }
  }
`;

const dateToString = (date: DateObject) => {
    return `${date.year}-${date.month}-${date.day}`
}

interface DateFieldPropsType {
    id: string;
    value: number | string | Date | DateObject;
    mindate?: Date;
    maxdate?: Date;
    placeholder?: string;
    disabled?: boolean;
    setValue: UseFormSetValue<FieldValues>;
}

const DateField = ({ id, value, mindate, maxdate, disabled=false, placeholder="", setValue }:DateFieldPropsType) => {

    const datevalue = React.useMemo(() => {
        if (value) {
            if (value instanceof DateObject) return value
            else if (value instanceof Date) {
                return new DateObject().set({
                    year: value.getFullYear(),
                    month: value.getMonth(),
                    day: value.getTime(),
                }) 
            }
            else if (typeof value === "string" && value !== "") {
                const [y, m, d] = value.split("-")

                return new DateObject().set({
                    year: parseInt(y? y : "0"),
                    month: parseInt(m? m : "0"),
                    day: parseInt(d? d : "0"),
                })  
            }
        }

        return null

    }, [value])

    return (
        <DateContainer>
            <DatePicker 
                id={`input-${id}`}
                value={datevalue}
                disabled={disabled}
                readOnly={disabled}
                format="MM/DD/YYYY"
                placeholder={placeholder}
                onChange={(date:DateObject) => {
                    setValue(id, date?.isValid ? dateToString(date) : null, { shouldValidate: true }); 
                }}
                minDate={mindate}
                maxDate={maxdate}
                className='input-component'
            />
        </DateContainer>
    )
}

export default DateField