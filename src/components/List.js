import React, { useEffect, useState } from 'react';
import { get as getCities } from '../services/cities';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const Component = ({ filter }) => {
    const [ cities, setCities ] = useState([])

    const getFilteredCities = async () => {
        const { data } = await getCities();
        setCities([...cities, ...data]);
    }
    
    useEffect(() => {
        getFilteredCities();
    }, [ filter ]);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {cities.map(({ geonameid, name, subcountry, country }) => {   
            const labelId = `checkbox-list-label-${geonameid}`;
    
            return (
              <ListItem
                key={geonameid}
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={name} secondary={`${subcountry} - ${country}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      );
}

export default Component;