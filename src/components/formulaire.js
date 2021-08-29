import React, { Component } from "react";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Axios from 'axios';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MailIcon from '@material-ui/icons/Mail';
import ImageIcon from '@material-ui/icons/Image';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import {useState} from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import { AirlineSeatIndividualSuiteSharp } from "@material-ui/icons";
const useStyles1 = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
function Formulaire(props) {
  const {Sval} = props
  const [id , setId] = useState(0);
  const [photo, setPhoto] = useState('');
  const [name , setName] = useState('');
  const [username , setUsername] = useState('');
  const [mail , setMail] = useState('');
  const [adress , setAdress] = useState('');
  const [adress1 , setAdress1] = useState('');
  const [workadress , setWorkadress] = useState('');
  const [phone , setPhone] = useState('');
  const [website , setWebsite] = useState('');
  const [cname , setCname] = useState('');
  //erreurs
  const [photoErreur, setPhotoErreur] = useState(false);
  const [nameErreur , setNameErreur] = useState(false);
  const [usernameErreur , setUsernameErreur] = useState(false);
  const [mailErreur , setMailErreur] = useState(false);
  const [adressErreur , setAdressErreur] = useState(false);
  const [adress1Erreur , setAdress1Erreur] = useState(false);
  const [workadressErreur , setWorkadressErreur] = useState(false);
  const [phoneErreur, setPhoneErreur] = useState(false);
  const [websiteErreur, setWebsiteErreur] = useState(false);
  const [cnameErreur, setCnameErreur] = useState(false);
  //Tester si les champs sont complétés
const tester = (e) =>
{ setPhotoErreur(false);
  setNameErreur(false);
  setUsernameErreur(false);
  setMailErreur(false);
  setAdressErreur(false);
  setPhoneErreur(false);
  setWebsiteErreur(false);
  setCnameErreur(false);
if(!photo )
  {
     setPhotoErreur(true);
     e.preventDefault();
     }
     
  if(!name )
  {
      setNameErreur(true);
      e.preventDefault();
  }
  if(!username )
  {
      setUsernameErreur(true);
      e.preventDefault();
  }
  if(!mail )
  {
      setMailErreur(true);
      e.preventDefault();
  }
  if(!adress )
  {
      setAdressErreur(true);
      e.preventDefault();
  }
  if(!phone )
  {
      setPhoneErreur(true);
      e.preventDefault();
  }
  
  if(!website )
  {
      setWebsiteErreur(true);
      e.preventDefault();
  }
  
  if(!cname )
  {
      setCnameErreur(true);
      e.preventDefault();
  }
  
  if(name && username && mail && adress && phone && website && cname)
  {
    e.preventDefault();
    props.modifier(photo,name,username,id,mail,adress,adress1,workadress,phone,website,cname);
  }
}
//ajouter photo
const ajouter = (e) =>
{
  const reader = new FileReader();
  reader.onload= () => 
  {
    if(reader.readyState === 2)
    {
      setPhoto(reader.result)
    }
  }
  reader.readAsDataURL(e.target.files[0])
}

 const classes = useStyles();
  //sending data to database :
 /* const SendData=()=>{
  const data = {id:id,
    name:name,
   username:username,
    mail:mail,
    adress:adress,
    adress1:adress1,
    workadress:workadress,
    phone:phone,
    website:website,
  cname:cname};
  alert({name})
Axios.post('http://localhost:8080/adduser',data)
.then((data)=>{
  console.log(data);
})
.catch((err)=>{
console.log(err)
})}*/
        return (
<div className="p-4">
<form>
   <p> <h4 align="center">Veuillez entrer les informations necessaires</h4></p>
   <hr></hr>
   
 <p><FormControl className={classes.margin} >
        <InputLabel htmlFor="input-with-icon-adornment">Nom complet</InputLabel>
        <Input
        placeholder="Nom et prénom"
        name="name"
        error={nameErreur} onChange={ (e) => setName(e.target.value)}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
       </p>
       <p><FormControl className={classes.margin} >
        <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
        <Input
        placeholder="Username"
        name="username"
        error={usernameErreur} onChange={ (e) => setUsername(e.target.value)}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
       </p>
  
 <p> <FormControl className={classes.margin} >
        <InputLabel htmlFor="input-with-icon-adornment">Choisir image</InputLabel>
        <Input type="file"
         onChange={ajouter}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              < ImageIcon />
            </InputAdornment>
          }
        />
      </FormControl></p>
  <p><FormControl className={classes.margin} >
        <InputLabel htmlFor="input-with-icon-adornment">Adresse mail</InputLabel>
        <Input type="email"
        error={mailErreur} onChange={ (e) => setMail(e.target.value) }
        placeholder="Adresse mail"
        name="email"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              < MailIcon />
            </InputAdornment>
          }
        />
      </FormControl></p>
      <p><FormControl className={classes.margin} >
        <InputLabel htmlFor="input-with-icon-adornment">Adresse postale </InputLabel>
        <Input 
        error={adressErreur} onChange={ (e) => setAdress(e.target.value) }
        placeholder="Adresse postale "
        name="home_adress1"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
            <HomeIcon/>
            </InputAdornment>
          }
        />
      </FormControl></p>
      <p><FormControl className={classes.margin} >
        <InputLabel htmlFor="input-with-icon-adornment">Adresse postale secondaire </InputLabel>
        <Input 
         onChange={ (e) => setAdress1(e.target.value) }
        placeholder="Adresse postale secondaire"
        name="home_adress2"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
            <HomeIcon/>
            </InputAdornment>
          }
        />
      </FormControl></p>
      <p><FormControl className={classes.margin} >
        <InputLabel htmlFor="input-with-icon-adornment">Lieu de travail</InputLabel>
        <Input 
         onChange={ (e) => setWorkadress(e.target.value) }
        placeholder="Lieu de travail"
        name="workadress"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
            <HomeIcon/>
            </InputAdornment>
          }
        />
      </FormControl></p>
      <p><FormControl className={classes.margin} >
        <InputLabel htmlFor="input-with-icon-adornment">Numéro de téléphone</InputLabel>
        <Input 
        error={phoneErreur} onChange={ (e) => setPhone(e.target.value) }
        placeholder="Numéro de téléphone"
        name="phone"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
            <PhoneIcon/>
            </InputAdornment>
          }
        />
      </FormControl></p>
      <p><FormControl className={classes.margin} >
        <InputLabel htmlFor="input-with-icon-adornment">Site Web</InputLabel>
        <Input 
        error={websiteErreur} onChange={ (e) => setWebsite(e.target.value) }
        placeholder="Website"
        name="website"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
            <LanguageIcon/>
            </InputAdornment>
          }
        />
      </FormControl></p>
      <p><FormControl className={classes.margin} >
        <InputLabel htmlFor="input-with-icon-adornment">Nom de l'entreprise</InputLabel>
        <Input 
        error={cnameErreur} onChange={ (e) => setCname(e.target.value) }
        placeholder="Nom de l'entreprise"
        name="company_name"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
            
            </InputAdornment>
          }
        />
      </FormControl></p>
<div  className="text-white rounded mb-2" ><Button
        fullWidth
        variant="contained" color="secondary"
       // variant="contained"
        
        size="large"
        startIcon={<DeleteIcon />}
        onClick={Sval}
      >
        Annuler
      </Button></div>
      <Button className="bg-success "
        fullWidth
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        onClick={tester}
        startIcon={<SaveIcon />}
      >
        Valider
      </Button>
      
  </form>  
    </div>
  );
}
export default Formulaire;