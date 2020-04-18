import React from "react";
import TextField from "@material-ui/core/TextField";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import AutocompleteMui from "@material-ui/lab/Autocomplete";

export default function Autocomplete(props) {
    return <AutocompleteMui
        options={props.optionList}
        getOptionLabel={option => option.name}
        renderInput={params => <TextField {...params} label={props.label} variant="outlined" />}
        onChange={(e, v) => props.onChange(v)}
        renderOption={(option, {inputValue}) => {
            const matches = match(option.name, inputValue);
            const parts = parse(option.name, matches);

            return (
                <div>
                    {parts.map((part, index) => (
                        <span key={index} style={{fontWeight: part.highlight ? 700 : 400}}>{part.text}</span>
                    ))}
                </div>
            );
        }}
    />
};
