import React from 'react';
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
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneIcon from '@material-ui/icons/Phone';
import Button from "@material-ui/core/Button";

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

    return (
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
                    <Container maxWidth="md" className={classes.formContainer}>
                        <form noValidate autoComplete="off" className={classes.form}>
                            <TextField
                                id="warrior-name"
                                label="Warrior name"
                                style={{ margin: 8 }}
                                placeholder="Your warrior name"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextareaAutosize aria-label="Optional teaser" placeholder="Optional teaser" />
                            <TextField
                                id="first-name"
                                label="First name"
                                style={{ margin: 8 }}
                                placeholder="Your real first name"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="last-name"
                                label="Last name"
                                style={{ margin: 8 }}
                                placeholder="Your real last name"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="street"
                                label="Street"
                                style={{ margin: 8 }}
                                placeholder="Street"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="zip-code"
                                label="Zip code"
                                style={{ margin: 8 }}
                                placeholder="ZIP"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="city"
                                label="City"
                                style={{ margin: 8 }}
                                placeholder="City"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="country-select-label">Age</InputLabel>
                                <Select
                                    labelId="country-select-label"
                                    id="country-select"
                                    value={country}
                                    required={true}
                                    onChange={handleCountryChange}
                                >
                                    <MenuItem value={1}>Country 1</MenuItem>
                                    <MenuItem value={2}>Country 2</MenuItem>
                                    <MenuItem value={3}>Country 3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="jugend-select-label">Turbojugend</InputLabel>
                                <Select
                                    labelId="jugend-select-label"
                                    id="jugend-select"
                                    value={jugend}
                                    required={true}
                                    onChange={handleJugendChange}
                                >
                                    <MenuItem value={1}>Tubojugend 1</MenuItem>
                                    <MenuItem value={2}>Tubojugend 2</MenuItem>
                                    <MenuItem value={3}>Tubojugend 3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="position-select-label">Position</InputLabel>
                                <Select
                                    labelId="position-select-label"
                                    id="position-select"
                                    value={position}
                                    required={true}
                                    onChange={handlePositionChange}
                                >
                                    <MenuItem value={1}>Position 1</MenuItem>
                                    <MenuItem value={2}>Position 2</MenuItem>
                                    <MenuItem value={3}>Position 3</MenuItem>
                                </Select>
                            </FormControl>
                            <TextareaAutosize aria-label="Hobbies" placeholder="Hobbies" />
                            <FormControl className={classes.margin}>
                                <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
                                <Input
                                    id="input-with-icon-adornment"
                                    fullWidth
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <PhoneIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <TextField
                                id="soccer-team"
                                label="Soccer team"
                                style={{ margin: 8 }}
                                placeholder="Soccer team"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="warship-select-label">Warship</InputLabel>
                                <Select
                                    labelId="warship-select-label"
                                    id="warship-select"
                                    value={warship}
                                    required={true}
                                    onChange={handleWarshipChange}
                                >
                                    <MenuItem value={'Warship 1'}>Warship 1</MenuItem>
                                    <MenuItem value={'Warship 2'}>Warship 2</MenuItem>
                                    <MenuItem value={'Warship 3'}>Warship 3</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                id="warship"
                                label="Warship"
                                style={{ margin: 8 }}
                                placeholder="Warship"
                                fullWidth
                                required
                                value={warship}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="optional-headline"
                                label="Optional headline"
                                style={{ margin: 8 }}
                                placeholder="Optional headline"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextareaAutosize aria-label="Optional text 1" placeholder="Optional text 1" />
                            <TextareaAutosize aria-label="Optional text 2" placeholder="Optional text 2" />
                            <Button variant="contained" color="primary">
                                Send
                            </Button>
                        </form>
                    </Container>
                </main>
            </div>
        </div>
    );
}

export default App;
