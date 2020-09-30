import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Item from '../Item/Item';
import classes from './FormElements.module.css';

const Projects = props => {

    const proItemsArray = props.details;
    let proItems = ( 
        <div>
            {proItemsArray.map((proElement, igKey) => (
                <Item 
                key={igKey} 
                id={igKey} 
                delete={props.onDelete}
                config="pro" 
                type={proElement.type}
                description={proElement.description}
                link={proElement.link}/>
            ))}
        </div>
    )

    return (
        <>
        <h1 className={classes.heading}>Projects & Training </h1>
        <Grid item xs={12} sm={2}>
            <div className={classes.Container}>
                <form onSubmit={props.onSubmit}>
                    <div className={classes.InputContainer}>
                        <div className={classes.inputBox}>
                            <label>Type</label>
                            <input
                                className={classes.Input}
                                placeholder="Type"
                                type="text"
                                name="type" required />
                        </div>
                        <div className={classes.inputBox}>
                            <label>Description</label>
                            <textarea
                                className={classes.Input}
                                placeholder="Description"
                                name="description" required />
                        </div>
                        <div className={classes.inputBox}>
                            <label>Link</label>
                            <input
                                className={classes.Input}
                                placeholder="Link"
                                type="text"
                                name="link" required />
                        </div>
                    </div>
                    <div className={classes.ButtonContainer}>
                        <Button disableElevation variant="contained" className={classes.Button} type="submit">Submit</Button>
                    </div>
                </form>
                <p className={classes.textDisabled}> At least 1 required</p>
                {proItems}
            </div>
        </Grid>
        </>
    )

}

export default Projects;