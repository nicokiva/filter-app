    import React, { useState } from 'react';
    import TextField from '@mui/material/TextField';
    import InputAdornment from '@mui/material/InputAdornment';
    import Search from '@mui/icons-material/Search';
    import AwesomeDebouncePromise from 'awesome-debounce-promise';
    import List from './List';

    const Component = () => {
        const [ filter, setFilter ] = useState('');

        const handleChange = AwesomeDebouncePromise (
            ({ target: { value } }) => {
                setFilter(value);
            },
            500
        );

        return (
            <section className="filter-section">
                <TextField id="search"
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
                
                <List filter={filter} />
            </section>
        )
    };

    export default Component;