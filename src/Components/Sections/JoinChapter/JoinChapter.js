import React, {useCallback} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from "@material-ui/lab/Autocomplete";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneIcon from "@material-ui/icons/Phone";
import Button from "@material-ui/core/Button";
import {useDropzone} from "react-dropzone";
import styled from "@emotion/styled";

const FormControlStyled = styled(FormControl)`
     margin: 8px;
`;

const TextFieldStyled = styled(TextField)`
    margin: 0 8px;
`;

export default function JoinChapter() {
    const [country, setCountry] = React.useState('');
    const [jugend, setJugend] = React.useState('');
    const [position, setPosition] = React.useState('');
    const [warship, setWarship] = React.useState('');

    const handleCountryChange = event => {
        setCountry(event.target.value);
    };

    const handleJugendChange = event => {
        setJugend(event.target.value);
    };

    const handlePositionChange = event => {
        setPosition(event.target.value);
    };

    const handleWarshipChange = event => {
        setWarship(event.target.value);
    };

    const countryList = [
        {name: 'Country 1'},
        {name: 'Country 2'},
        {name: 'Country 3'},
    ];

    const jugendList = [
        {name: 'Jugend 1'},
        {name: 'Jugend 2'},
        {name: 'Jugend 3'},
    ];

    const positionList = [
        {name: 'Position 1'},
        {name: 'Position 2'},
        {name: 'Position 3'},
    ];

    const warshipList = [
        {name: 'Warship 1'},
        {name: 'Warship 2'},
        {name: 'Warship 3'},
    ];

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return <form noValidate autoComplete="off">
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <p>If you want to join an existing jugend please get in touch with the local
                    president.</p>
                <p>if you want to start a new chapter please send a mail to
                    (jugendwart@turbojugend.org)</p>
            </Grid>
            <Grid item xs={6}>
                <TextFieldStyled id="warrior-name" label="Warrior name" fullWidth required/>
                <TextFieldStyled id="optional-teaser" label="Optional teaser" multiline fullWidth required/>
                <TextFieldStyled id="first-name" label="First name" fullWidth required/>
                <TextFieldStyled id="last-name" label="Last name" fullWidth required/>
                <TextFieldStyled id="street" label="Street" fullWidth/>
                <TextFieldStyled id="zip-code" label="Zip code" fullWidth/>
                <TextFieldStyled id="city" label="City" fullWidth/>
                <FormControlStyled variant="outlined" fullWidth={true}>
                    <Autocomplete
                        id="country"
                        options={countryList}
                        getOptionLabel={option => option.name}
                        renderInput={params => <TextField {...params} label="Country" variant="outlined" />}
                        onChange={handleCountryChange}
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
                </FormControlStyled>
                <FormControlStyled variant="outlined" fullWidth={true}>
                    <Autocomplete
                        id="jugend"
                        options={jugendList}
                        getOptionLabel={option => option.name}
                        onChange={handleJugendChange}
                        renderInput={params => (
                            <TextField {...params} label="Jugend" variant="outlined" margin="normal"/>
                        )}
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
                </FormControlStyled>
                <FormControlStyled variant="outlined" fullWidth={true}>
                    <Autocomplete
                        id="position"
                        options={positionList}
                        getOptionLabel={option => option.name}
                        onChange={handlePositionChange}
                        renderInput={params => (
                            <TextField {...params} label="Position" variant="outlined" margin="normal"/>
                        )}
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
                </FormControlStyled>
                <TextFieldStyled id="hobbies" label="Hobbies" multiline fullWidth/>
                <FormControlStyled fullWidth={true}>
                    <InputLabel htmlFor="input-with-icon-adornment">Mobile phone</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        fullWidth
                        startAdornment={
                            <InputAdornment position="start">
                                <PhoneIcon/>
                            </InputAdornment>
                        }
                    />
                </FormControlStyled>
                <TextFieldStyled id="soccer-team" label="Soccer team" fullWidth/>
                <FormControlStyled variant="outlined" fullWidth={true}>
                    <Autocomplete
                        id="warship"
                        options={warshipList}
                        getOptionLabel={option => option.name}
                        onChange={handleWarshipChange}
                        renderInput={params => (
                            <TextField {...params} label="Warship" variant="outlined"
                                       margin="normal"/>
                        )}
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
                </FormControlStyled>
                <TextFieldStyled id="warship" label="Favourite warship" fullWidth value={warship}/>
                <TextFieldStyled id="optional-headline" label="Optional headline" fullWidth/>
                <TextFieldStyled id="optional-text-1" label="Optional text 1" multiline fullWidth/>
                <TextFieldStyled id="optional-text-2" label="Optional text 2" multiline fullWidth/>
            </Grid>
            <Grid item xs={6}>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <p>Drop the files here ...</p> :
                            <p>Drag 'n' drop some files here, or click to select files</p>
                    }
                </div>
                <TextFieldStyled id="image-caption" label="Image caption" multiline fullWidth/>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary">Send</Button>
            </Grid>
        </Grid>
    </form>
};
