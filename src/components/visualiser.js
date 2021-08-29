import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Modal } from 'reactstrap';
const useStyles = makeStyles({
  
});
function Visualiser(props) {
    const classes = useStyles();
if(props.data.photo){  return (
    <div > <Modal isOpen={props.vs}>
     <Card className={classes.root}>
      
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          width="500"
          image={props.data.photo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <h5> Adresse mail : {props.data.email}</h5>
          <h5> Adresse postale : {props.data.adress}</h5>
          <h5> Numéro : {props.data.phone}</h5>
          <h5> Site web : {props.data.website}</h5>
          <h5> Nom entreprise : {props.data.cname}</h5>
          </Typography>
        </CardContent>
      <CardActions align="center">
     <Button color="secondary" variant="outlined" onClick={props.nonvs}><b>Fermer</b></Button>
      </CardActions>
    </Card></Modal>
    </div>
  );}
  else{
    return (
      <div > <Modal isOpen={props.vs}>
       <Card className={classes.root}>
       <img height="300" width="500" src="unknownavatar.png" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.data.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            <h5> Adresse mail : {props.data.mail}</h5>
            <h5> Adresse postale  : {props.data.adress}</h5>
            <h5> Numéro : {props.data.phone}</h5>
            <h5> Site web : {props.data.website}</h5>
            <h5> Nom entreprise : {props.data.cname}</h5>
            </Typography>
          </CardContent>
        
        <CardActions align="center">
        <Button color="secondary" variant="outlined" onClick={props.nonvs}><b>Fermer</b></Button>
        </CardActions>
      </Card></Modal>
      </div>
    );}
  
}

export default Visualiser;