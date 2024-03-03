import React from 'react';
import { DatePicker }  from '@fluentui/react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { Stack } from '@fluentui/react';
import { PrimaryButton } from '@fluentui/react';
import './App.css';
import { TextField } from '@fluentui/react';


initializeIcons();

export interface IABCustomDialogProps {
  //text input
  text: string | undefined;
  //date input
  date: Date | undefined;
}

const ABCustomDialog: React.FunctionComponent<IABCustomDialogProps> = (props: IABCustomDialogProps) => {
  const [text, setText] = React.useState<string | undefined>(props.text);
  const [date, setDate] = React.useState<Date | undefined>(props.date);

  const formatDate = (value?: Date | undefined): string => {
    if (!value) {
      return "";
    }

    let result = ("0" + (value.getMonth() + 1).toString()).slice(-2) + "/";
    result += ("0" + value.getDate().toString()).slice(-2) + "/";
    result += value.getFullYear().toString();

    return result;
  }

  return (
    <>
      <TextField
        label="Label of the Text Input"
        value={text}
        onChange={(event: any, newvalue: string | undefined) => { setText(newvalue); }} />
      <DatePicker
        label="Label of the Date Input"
        value={date}
        onSelectDate={(newValue: Date | undefined | null) => { setDate(newValue ? newValue : undefined) }}
        formatDate={formatDate}
      />
      <div className="footerDiv">
        <Stack horizontal horizontalAlign={"end"} tokens={{ childrenGap: 10, padding: 10 }}>
          <PrimaryButton text="OK" onClick={() => {
            //this code on click of "OK" button returns current state to calling part
            //@ts-ignore
            window.returnValue = {
              text: text,
              date: date
            };
            window.close();
          }} />
          <PrimaryButton text="Cancel" onClick={() => {
            //This code closes the dialog window
            window.close();
          }} />
        </Stack>
      </div>
    </>);
}

export default ABCustomDialog;