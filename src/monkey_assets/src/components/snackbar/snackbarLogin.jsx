import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';


const SnackbarDefault = (props) => {
    const info = {
        content: props.content,
        openSnack: props.openSnack,
        transitionSnack: props.transitionSnack,
        handleCloseSnack: props.handleCloseSnack,
    }

    return (
        <div>
            <Snackbar
                open={info.openSnack}
                onClose={info.handleCloseSnack}
                TransitionComponent={info.transitionSnack}
                message={info.content}
                key={info.transitionSnack ? info.transitionSnack.name : ''}
            />
        </div>
    );

}

export default SnackbarDefault;