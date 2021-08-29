import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {yellow , green ,pink, blue} from '@material-ui/core/colors'
import { Modal } from 'reactstrap';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { SecurityOutlined } from "@material-ui/icons";
import md5 from "md5";
function Visph(props) {const useStyles = makeStyles((theme) => ({
    
    media: {
      height: 0,
      paddingTop: '80%', // 16:9
      backgroundColor : bgc(),
    },
    expand: {
      transform: 'rotate(0deg)',
      
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    
  }));

  //background color function
  const bgc=()=>{
    return "#" + md5(props.na).slice(0, 6);
    /*if((props.na[0]>="A"&&props.na[0]<="H")||(props.na[0]>="a"&&props.na[0]<="h")){
           return yellow[500];
         }
    if((props.na[0]>="I"&&props.na[0]<="N")||(props.na[0]>="i"&&props.na[0]<="n")){
           return green[500];}
    if((props.na[0]>="O"&&props.na[0]<="T")||(props.na[0]>="o"&&props.na[0]<="t")){
           return blue [500];}
     if((props.na[0]>="U"&&props.na[0]<="Z")||(props.na[0]>="u"&&props.na[0]<="z")){
           return pink [500];}*/
     }
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if(props.ph){return (
   <div className="App-header">
      <Modal isOpen={props.av}>
      <Card className={classes.root}>
      <CardHeader align="center"
        action={
          <IconButton onClick={props.nonav} >
            <CloseIcon />
          </IconButton>
        }
        title={props.na}
        
      />
      <img height="400" width="500" src={props.ph}/>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" align="center">
        <hr></hr>
      
        <Button color="secondary" variant="outlined" onClick={props.nonav} align="center"><b>Fermer</b></Button>
        </Typography>
      </CardContent>
    </Card>
      </Modal>
    </div>
  );}
  else
  {return( <div className="App-header">
  <Modal isOpen={props.av}>
  <Card className={classes.root}>
  <CardHeader align="center"
    action={
      <IconButton onClick={props.nonav} >
        <CloseIcon />
      </IconButton>
    }
    title={props.na}
    subheader= {props.da}

  />
  <img height="400" width="500" src="unknownavatar.png" />
  
  <CardContent>
    <Typography variant="body2" color="textSecondary" component="p" align="center">
    <hr></hr>
    <Button color="secondary" variant="outlined" onClick={props.nonav} align="center"><b>Fermer</b></Button>
    </Typography>
  </CardContent>
</Card>
  </Modal>
</div>);}
}

export default Visph;