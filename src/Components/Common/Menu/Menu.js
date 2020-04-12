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
import {NavLink} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import styled from "@emotion/styled";
import {ClassNames} from '@emotion/core';
import AddIcon from '@material-ui/icons/Add';

const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: #000;
    display: block;
`;

export default function Menu() {
    const menuItems = [
        {name: 'Home', icon: <HomeIcon/>, link: '/'},
        {name: 'News', icon: <NewReleasesIcon/>, link: '/news'},
        {name: 'Rules', icon: <ListIcon/>, link: '/rules'},
        {name: 'Create a chapter', icon: <AddIcon/>, link: '/create-a-chapter'},
        {name: 'Join a chapter', icon: <PersonAddIcon/>, link: '/join-a-chapter'},
        {name: 'Local jugends', icon: <PublicIcon/>, link: '/local-jugends'},
        {name: 'Assport', icon: <AssignmentIndIcon/>, link: '/assport'},
        {name: 'Communication', icon: <MailIcon/>, link: '/communications'}
    ];

    return <ClassNames>
        {({ css }) => (
            <List>
                {menuItems.map((menuItem, key) => (
                    <NavLinkStyled to={menuItem.link} key={key} exact={true} activeClassName={css({background: '#CCC'})}>
                        <ListItem button key={menuItem.name}>
                            <ListItemIcon>{menuItem.icon}</ListItemIcon>
                            <ListItemText primary={menuItem.name}/>
                        </ListItem>
                    </NavLinkStyled>
                ))}
            </List>
        )}
    </ClassNames>
};
