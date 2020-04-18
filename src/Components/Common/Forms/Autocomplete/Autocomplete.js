import React from "react";
import TextField from "@material-ui/core/TextField";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import AutocompleteMui from "@material-ui/lab/Autocomplete";

export default function Autocomplete(props) {
    return <AutocompleteMui
        options={props.optionList}
        getOptionLabel={option => option.name}
        renderInput={params => <TextField
            {...params}
            label={props.label}
            variant="outlined"
            onChange={props.onInputChange || null}
        />}
        onChange={props.onChange ? (e, v) => props.onChange(v[props.field]) : null}
        freeSolo={props.freeSolo || false}
        selectOnFocus={(props.freeSolo && props.freeSolo === true) || false}
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
