import React, {useCallback} from 'react'
import './App.css';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import ListIcon from '@material-ui/icons/List';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PublicIcon from '@material-ui/icons/Public';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MailIcon from '@material-ui/icons/Mail';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneIcon from '@material-ui/icons/Phone';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {useDropzone} from 'react-dropzone';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    formContainer: {
        border: '1px solid #000',
    },
    form: {
        margin: '20px 0',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function App() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [country, setCountry] = React.useState('');
    const [jugend, setJugend] = React.useState('');
    const [position, setPosition] = React.useState('');
    const [warship, setWarship] = React.useState('');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

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

    const menuItems = [
        {name: 'News', icon: <NewReleasesIcon/>},
        {name: 'Rules', icon: <ListIcon/>},
        {name: 'Join?', icon: <PersonAddIcon/>},
        {name: 'Local jugends', icon: <PublicIcon/>},
        {name: 'Assport', icon: <AssignmentIndIcon/>},
        {name: 'Jugend communication', icon: <MailIcon/>}
    ];

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

    return (
        <Box component="span" m={1}>
            <div className="App">
                <div className={classes.root}>
                    <CssBaseline/>
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: open,
                                })}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" noWrap>
                                Turbojugend
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        className={clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        })}
                        classes={{
                            paper: clsx({
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open,
                            }),
                        }}
                    >
                        <div className={classes.toolbar}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                            </IconButton>
                        </div>
                        <Divider/>
                        <List>
                            {menuItems.map((menuItem) => (
                                <ListItem button key={menuItem.name}>
                                    <ListItemIcon>{menuItem.icon}</ListItemIcon>
                                    <ListItemText primary={menuItem.name}/>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>
                        <Container maxWidth="sm" className={classes.formContainer}>
                            <form noValidate autoComplete="off" className={classes.form}>
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
                        </Container>
                    </main>
                </div>
            </div>
        </Box>
    );
}

export default App;
