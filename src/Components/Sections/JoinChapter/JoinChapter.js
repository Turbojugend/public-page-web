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
import {makeStyles} from "@material-ui/core/styles";

export default function JoinChapter() {
    const useStyles = makeStyles(theme => ({
        // root: {
        //     display: 'flex',
        // },
        // appBar: {
        //     zIndex: theme.zIndex.drawer + 1,
        //     transition: theme.transitions.create(['width', 'margin'], {
        //         easing: theme.transitions.easing.sharp,
        //         duration: theme.transitions.duration.leavingScreen,
        //     }),
        // },
        // menuButton: {
        //     marginRight: 36,
        // },
        // hide: {
        //     display: 'none',
        // },
        // drawerClose: {
        //     transition: theme.transitions.create('width', {
        //         easing: theme.transitions.easing.sharp,
        //         duration: theme.transitions.duration.leavingScreen,
        //     }),
        //     overflowX: 'hidden',
        //     width: theme.spacing(7) + 1,
        //     [theme.breakpoints.up('sm')]: {
        //         width: theme.spacing(9) + 1,
        //     },
        // },
        // toolbar: {
        //     display: 'flex',
        //     alignItems: 'center',
        //     justifyContent: 'flex-end',
        //     padding: theme.spacing(0, 1),
        //     // necessary for content to be below app bar
        //     ...theme.mixins.toolbar,
        // },
        // content: {
        //     flexGrow: 1,
        //     padding: theme.spacing(3),
        // },
        // formContainer: {
        //     border: '1px solid #000',
        // },
        // form: {
        //     margin: '20px 0',
        // },
        // formControl: {
        //     margin: theme.spacing(1),
        //     minWidth: 120,
        // },
        // selectEmpty: {
        //     marginTop: theme.spacing(2),
        // },
    }));

    const classes = useStyles();
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

    return <form noValidate autoComplete="off" className={classes.form}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <p>If you want to join an existing jugend please get in touch with the local
                    president.</p>
                <p>if you want to start a new chapter please send a mail to
                    (jugendwart@turbojugend.org)</p>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="warrior-name"
                    label="Warrior name"
                    style={{margin: 8}}
                    fullWidth
                    required
                />
                <TextField
                    id="optional-teaser"
                    label="Optional teaser"
                    style={{margin: 8}}
                    multiline
                    fullWidth
                    required
                />
                <TextField
                    id="first-name"
                    label="First name"
                    style={{margin: 8}}
                    fullWidth
                    required
                />
                <TextField
                    id="last-name"
                    label="Last name"
                    style={{margin: 8}}
                    fullWidth
                    required
                />
                <TextField
                    id="street"
                    label="Street"
                    style={{margin: 8}}
                    fullWidth
                />
                <TextField
                    id="zip-code"
                    label="Zip code"
                    style={{margin: 8}}
                    fullWidth
                />
                <TextField
                    id="city"
                    label="City"
                    style={{margin: 8}}
                    fullWidth
                />
                <FormControl variant="outlined" className={classes.formControl} fullWidth={true}>
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
                                        <span key={index}
                                              style={{fontWeight: part.highlight ? 700 : 400}}>{part.text}</span>
                                    ))}
                                </div>
                            );
                        }}
                    />
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}
                             fullWidth={true}>
                    <Autocomplete
                        id="jugend"
                        options={jugendList}
                        getOptionLabel={option => option.name}
                        onChange={handleJugendChange}
                        renderInput={params => (
                            <TextField {...params} label="Jugend" variant="outlined"
                                       margin="normal"/>
                        )}
                        renderOption={(option, {inputValue}) => {
                            const matches = match(option.name, inputValue);
                            const parts = parse(option.name, matches);

                            return (
                                <div>
                                    {parts.map((part, index) => (
                                        <span key={index}
                                              style={{fontWeight: part.highlight ? 700 : 400}}>{part.text}</span>
                                    ))}
                                </div>
                            );
                        }}
                    />
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl} fullWidth={true}>
                    <Autocomplete
                        id="position"
                        options={positionList}
                        getOptionLabel={option => option.name}
                        onChange={handlePositionChange}
                        renderInput={params => (
                            <TextField {...params} label="Position" variant="outlined"
                                       margin="normal"/>
                        )}
                        renderOption={(option, {inputValue}) => {
                            const matches = match(option.name, inputValue);
                            const parts = parse(option.name, matches);

                            return (
                                <div>
                                    {parts.map((part, index) => (
                                        <span key={index}
                                              style={{fontWeight: part.highlight ? 700 : 400}}>{part.text}</span>
                                    ))}
                                </div>
                            );
                        }}
                    />
                </FormControl>
                <TextField
                    id="hobbies"
                    label="Hobbies"
                    style={{margin: 8}}
                    multiline
                    fullWidth
                />
                <FormControl className={classes.formControl} fullWidth={true}>
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
                </FormControl>
                <TextField
                    id="soccer-team"
                    label="Soccer team"
                    style={{margin: 8}}
                    fullWidth
                />
                <FormControl variant="outlined" className={classes.formControl}
                             fullWidth={true}>
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
                                        <span key={index}
                                              style={{fontWeight: part.highlight ? 700 : 400}}>{part.text}</span>
                                    ))}
                                </div>
                            );
                        }}
                    />
                </FormControl>
                <TextField
                    id="warship"
                    label="Favourite warship"
                    style={{margin: 8}}
                    fullWidth
                    value={warship}
                />
                <TextField
                    id="optional-headline"
                    label="Optional headline"
                    style={{margin: 8}}
                    fullWidth
                />
                <TextField
                    id="optional-text-1"
                    label="Optional text 1"
                    style={{margin: 8}}
                    multiline
                    fullWidth
                />
                <TextField
                    id="optional-text-2"
                    label="Optional text 2"
                    style={{margin: 8}}
                    multiline
                    fullWidth
                />
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
                <TextField
                    id="image-caption"
                    label="Image caption"
                    style={{margin: 8}}
                    multiline
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary">
                    Send
                </Button>
            </Grid>
        </Grid>
    </form>
};
