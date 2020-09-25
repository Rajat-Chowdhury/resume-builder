import React from 'react';
import Grid from '@material-ui/core/Grid';

import Input from '../Input/Input'
import classes from './FormElements.module.css';

const BasicDetails = props => {

    const formElementArray = props.details;
    let form = (
        <form>
            {formElementArray.map(formElement => (
                <Input
                    className={classes.form__input}
                    key={formElement.id}
                    inputType={formElement.inputType}
                    value={formElement.value}
                    config={formElement.config}
                    invalid={!formElement.valid}
                    touched={formElement.touched}
                    changed={(event) => props.input(event, formElement.id)} />
            ))}
        </form>
    )

    return (
        <Grid item xs={12} sm={2}>
            <div className={classes.Container}>
                <h2>Basic Details</h2>
                {form}
            </div>
        </Grid>
    );
}

export default BasicDetails;