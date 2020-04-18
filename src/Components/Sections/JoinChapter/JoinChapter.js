import React, {useCallback} from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneIcon from "@material-ui/icons/Phone";
import Button from "@material-ui/core/Button";
import {useDropzone} from "react-dropzone";
import styled from "@emotion/styled";
import Autocomplete from "../../Common/Forms/Autocomplete/Autocomplete";

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
                <TextFieldStyled label="Warrior name" fullWidth required/>
                <TextFieldStyled label="Optional teaser" multiline fullWidth required/>
                <TextFieldStyled label="First name" fullWidth required/>
                <TextFieldStyled label="Last name" fullWidth required/>
                <TextFieldStyled label="Street" fullWidth/>
                <TextFieldStyled label="Zip code" fullWidth/>
                <TextFieldStyled label="City" fullWidth/>
                <FormControlStyled variant="outlined" fullWidth={true}>
                    <Autocomplete
                        optionList={countryList}
                        onChange={setCountry}
                        label="Country"
                    />
                <FormControlStyled variant="outlined" fullWidth={true}>
                </FormControlStyled>
                    <Autocomplete
                        optionList={jugendList}
                        onChange={setJugend}
                        label="Jugend"
                    />
                </FormControlStyled>
                <FormControlStyled variant="outlined" fullWidth={true}>
                    <Autocomplete
                        optionList={positionList}
                        onChange={setPosition}
                        label="Position"
                    />
                </FormControlStyled>
                <TextFieldStyled label="Hobbies" multiline fullWidth/>
                <FormControlStyled fullWidth={true}>
                    <InputLabel htmlFor="input-with-icon-adornment">Mobile phone</InputLabel>
                    <Input
                        fullWidth
                        startAdornment={
                            <InputAdornment position="start">
                                <PhoneIcon/>
                            </InputAdornment>
                        }
                    />
                </FormControlStyled>
                <TextFieldStyled label="Soccer team" fullWidth/>
                <FormControlStyled variant="outlined" fullWidth={true}>
                    <Autocomplete
                        optionList={warshipList}
                        onChange={setWarship}
                        label="Warship"
                    />
                </FormControlStyled>
                <TextFieldStyled label="Favourite warship" fullWidth value={warship}/>
                <TextFieldStyled label="Optional headline" fullWidth/>
                <TextFieldStyled label="Optional text 1" multiline fullWidth/>
                <TextFieldStyled label="Optional text 2" multiline fullWidth/>
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
                <TextFieldStyled label="Image caption" multiline fullWidth/>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary">Send</Button>
            </Grid>
        </Grid>
        <p>{country.name}</p>
        <p>{jugend.name}</p>
        <p>{position.name}</p>
        <p>{warship.name}</p>
    </form>
};
