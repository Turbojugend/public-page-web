import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from "@emotion/styled";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const TextFieldStyled = styled(TextField)`
    margin: 0 8px;
`;

export default function CreateChapter() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('');
    const [state, setState] = React.useState({
        checked: false,
    });

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleCheckChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return <div>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography className={classes.heading}>Join the worldwide Turbojugend</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    Check the <a href="http://turbojugend.org/map/">Turbojugend Map</a> for the chapters in your area and reach out to the chapters close to you:
                    <ul>
                        <li>If there are no chapters in your area: Start your own.</li>
                        <li>If there is a chapter close to you: Join them.</li>
                        <li>If you do not want to join your local chapters: Tell us why.</li>
                    </ul>
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
            >
                <Typography className={classes.heading}>Setup your chapter</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    <ul>
                        <li><a href="http://www.turbojugend.org/downloads/Turbojugend-Guidelines.pdf">Check our guidelines for new chapters</a> and choose your chapter name accordingly.</li>
                        <li>Tell us where your chapter will be located.</li>
                    </ul>
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
            >
                <Typography className={classes.heading}>Become the president</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <form noValidate autoComplete="off">
                    <TextFieldStyled id="warrior-name" label="Warrior name" fullWidth required/>
                    <TextFieldStyled id="email" label="Email" fullWidth required/>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checked}
                                onChange={handleCheckChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Approve our rules"
                    />
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary">Send</Button>
                    </Grid>
                </form>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
};
