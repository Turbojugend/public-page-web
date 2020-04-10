import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import React from "react";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import ListIcon from "@material-ui/icons/List";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PublicIcon from "@material-ui/icons/Public";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import MailIcon from "@material-ui/icons/Mail";

export default function Menu() {
    const menuItems = [
        {name: 'News', icon: <NewReleasesIcon/>},
        {name: 'Rules', icon: <ListIcon/>},
        {name: 'Join?', icon: <PersonAddIcon/>},
        {name: 'Local jugends', icon: <PublicIcon/>},
        {name: 'Assport', icon: <AssignmentIndIcon/>},
        {name: 'Jugend communication', icon: <MailIcon/>}
    ];

    return <List>
        {menuItems.map((menuItem) => (
            <ListItem button key={menuItem.name}>
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.name}/>
            </ListItem>
        ))}
    </List>
};
