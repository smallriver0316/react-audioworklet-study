import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Typography } from '@material-ui/core';
import BasicPattern from './BasicPattern';
import TextDefinePattern from './TextDefinePattern';
import ParamDefinePattern from './ParamDefinePattern';
import ParamControlPattern from './ParamControlPattern';
import MessagePort from './MessagePort';
import BitCrusher from './BitCrusher';
import ContentPlayer from './ContentPlayer';
import OnePoleFilter from './OnePoleFilter';

const useStyles = makeStyles({
  container: {
    textAlign: 'left',
    paddingTop: '64px',
    display: 'flex',
    flexWrap: 'wrap'
  }
});

const CardContainer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography variant="h3">
          React AudioWorklet Design Pattern
        </Typography>
        <div className={classes.container}>
          <BasicPattern />
          <TextDefinePattern />
          <ParamDefinePattern />
          <ParamControlPattern />
          <ContentPlayer />
          <MessagePort />
          <BitCrusher />
          <OnePoleFilter />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default CardContainer;
