import React, {useState} from "react";

import Favorite from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const theme = createTheme({/* kalbin rengini turuncu yapmak icin */
    palette: {
        orange: {
            main: '#FF4820'
        }
    }
});

function sayHi() {/* test fonksiyonu */
    console.log("Hello!");
}

export default function HeartButton({ status } ) {
    const [liked,
        setLiked] = useState(status);

    const handleIconClick = (id) => {/* databaseden beğeniler cekilirken burası kullanılabilir mi kalbi doğru renderlamak icin? */
        setLiked(true)
    }

    return (
        <ThemeProvider theme={theme}>
            <IconButton onClick={() => setLiked((prev) => !prev)}>
                {liked
                    ? <Favorite color="orange" fontSize="large"/>
                    : <FavoriteBorder color="orange" fontSize="large"/>}
            </IconButton>
        </ThemeProvider>
    );
}

/* import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';
import { withStyles } from "@mui/material/styles"; */

{/*        iconProps={{ iconName: 'favorite_border' }}
        styles={{
          icon: {color: 'white', fontSize: 72},
          root: {
            width: 100,
            height: 100,
            backgroundColor: 'black',
            selectors: {
              ':hover .ms-Button-icon': {
                color: 'red'
              },
              ':active .ms-Button-icon': {
                color: 'yellow'
              }
            }
          },
          rootHovered: {backgroundColor: 'black'},
          rootPressed: {backgroundColor: 'black'}
        }}*/
}
{/* <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
 */
}
/* export default function HeartButton() {

    return (
        <Fab disabled aria-label="like">
            <FavoriteIcon />
        </Fab>
    );
} */