import React, {useState} from "react";
import styled from "@emotion/styled";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Alert from "@material-ui/lab/Alert";
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from "../../Common/Forms/Autocomplete/Autocomplete";

const FormControlStyled = styled(FormControl)`
    margin: 8px;
`;

const TextFieldStyled = styled(TextField)`
    margin: 0 8px;
`;

const Section = styled.div`
    margin-bottom: 10px;
`;

export default function CreateChapter() {
    const [acceptRules, setAcceptRules] = useState(false);
    const [chapterName, setChapterName] = useState('');
    const [warriorName, setWarriorName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
    }

    const locationList = [
        {name: 'Barcelona'},
        {name: 'Oslo'},
        {name: 'Hamburg'},
    ]

    return <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div>
            <h1>Start your own Turbojugend</h1>
            <Divider/>
            <Section>
                <h2>Join the worldwide Turbojugend</h2>
                <p>
                    Check the <a href="http://turbojugend.org/map/">Turbojugend Map</a> for the chapters in your area
                    and reach out to the chapters close to you:
                </p>
                <ul>
                    <li>If there are no chapters in your area: Start your own.</li>
                    <li>If there is a chapter close to you: Join them.</li>
                    <li>If you do not want to join your local chapters: Tell us why.</li>
                </ul>
            </Section>
            <Divider/>
            <Section>
                <h2>Setup your chapter</h2>
                <p>
                    Check the <a href="http://turbojugend.org/map/">Turbojugend Map</a> for the chapters in your area
                    and reach out to the chapters close to you:
                </p>
                <ul>
                    <li><a href="http://www.turbojugend.org/downloads/Turbojugend-Guidelines.pdf">Check our
                        guidelines for new chapters</a> and choose your chapter name accordingly.
                    </li>
                    <li>Tell us where your chapter will be located.</li>
                </ul>
                <TextFieldStyled
                    label="Chapter name"
                    fullWidth
                    required
                    value={chapterName}
                    onChange={e => setChapterName(e.target.value)}
                />
                <FormControlStyled variant="outlined" fullWidth={true}>
                    <Autocomplete optionList={locationList} onChange={setLocation} />
                </FormControlStyled>
            </Section>
            <Divider/>
            <Section>
                <h2>Become the president</h2>
                <div>
                    <TextFieldStyled
                        label="Warrior name"
                        fullWidth
                        required
                        value={warriorName}
                        onChange={e => setWarriorName(e.target.value)}
                    />
                    <TextFieldStyled
                        label="Email"
                        fullWidth
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={acceptRules}
                                onChange={e => setAcceptRules(e.target.checked)}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Approve our rules"
                    />
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">Send</Button>
                    </Grid>
                </div>
            </Section>
        </div>
        {formSubmitted &&
            <Alert severity="success">The information goes to the turbojugend, when all it's okey we tell you!</Alert>
        }

        {formSubmitted &&
        <ul>
            <li>Chapter name: {chapterName}</li>
            <li>Location: {location.name}</li>
            <li>Warrior name: {warriorName}</li>
            <li>Email: {email}</li>
            <li>Accepted rules: {acceptRules ? 'YES' : 'NO'}</li>
        </ul>
        }
    </form>
};
