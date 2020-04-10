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
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

export default function Menu() {
    const menuItems = [
        {name: 'Home', icon: <HomeIcon/>, link: '/'},
        {name: 'News', icon: <NewReleasesIcon/>, link: '/news'},
        {name: 'Rules', icon: <ListIcon/>, link: '/rules'},
        {name: 'Join a chapter', icon: <PersonAddIcon/>, link: '/join-a-chapter'},
        {name: 'Local jugends', icon: <PublicIcon/>, link: '/local-jugends'},
        {name: 'Assport', icon: <AssignmentIndIcon/>, link: '/assport'},
        {name: 'Communication', icon: <MailIcon/>, link: '/communications'}
    ];

    return <List>
        {menuItems.map((menuItem) => (
            <Link to={menuItem.link}>
                <ListItem button key={menuItem.name}>
                    <ListItemIcon>{menuItem.icon}</ListItemIcon>
                    <ListItemText primary={menuItem.name}/>
                </ListItem>
            </Link>
        ))}
    </List>
};
