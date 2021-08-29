import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {yellow , green ,pink, blue} from '@material-ui/core/colors';
import md5 from "md5";
function Avat(props) {
     //avatar style
const useStyles2 = makeStyles((theme) => ({
    root: {
     display: 'flex',
     '& > *': {
       margin: theme.spacing(1),
     },
   },
    avatar: {
      backgroundColor: bgc(),
    },
  }));
  
  const useStyles1 = makeStyles((theme) => ({
   margin: {
     margin: theme.spacing(1),
   },
   extendedIcon: {
     marginRight: theme.spacing(1),
   },
   
  }));
 
  //background color function
  const bgc=()=>{
    return "#" + md5(props.name).slice(0, 6);
   /*if((props.name[0]>="A"&&props.name[0]<="H")||(props.name[0]>="a"&&props.name[0]<="h")){
           return yellow[500];
         }
    if((props.name[0]>="I"&&props.name[0]<="N")||(props.name[0]>="i"&&props.name[0]<="n")){
           return green[500];}
    if((props.name[0]>="O"&&props.name[0]<="T")||(props.name[0]>="o"&&props.name[0]<="t")){
           return blue [500];}
     if((props.name[0]>="U"&&props.name[0]<="Z")||(props.name[0]>="u"&&props.name[0]<="z")){
           return pink [500];}*/
     }
      //recuperation de la 1ère lettre apres l'espace (dans le nom complet)
  const prenom=(n)=>{
    for (let i = 1; i < n.length; i++) {
      if(n[i]==" "){
       return  n[i+1].toUpperCase();
      }
    }
  }
  //recuperation de la premiere lettre du nom complet
  const nom=(N)=>{
  return  N[0].toUpperCase();
  }
  const classe = useStyles2();
  return (
    <div >
      <Avatar className={classe.avatar} src={props.photo} onClick={() => props.visph(props.photo,props.name,props.date)}>{nom(props.name)}{prenom(props.name) }
             </Avatar>
    </div>
  );
}


export default Avat;