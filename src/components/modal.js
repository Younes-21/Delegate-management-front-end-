import React, { useState  ,useEffect} from 'react';
import { Modal } from 'reactstrap';
import Formulaire from "./formulaire";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Mod(props) {
  const [Val , setVal] = useState(false)
  const classes = useStyles();
  const Sval=(e)=> {setVal(!Val)
    e.preventDefault();}
  
   const [photo, setPhoto] = useState('')
  const [name, setName] = useState('') 
  const [username, setUsername] = useState('') 
  const [id, setId] = useState(0)
   const [mail, setMail] = useState('')
   const [adress, setAdress] = useState('')
   const [adress1, setAdress1] = useState('')
   const [workadress, setWorkadress] = useState('')
   const [phone, setPhone] = useState('')
   const [website, setWebsite] = useState('')
   const [cname, setCname] = useState('')
   const modifier = (p,n,us,i,m,a,a1,wa,ph,w,cn) =>
   {   setPhoto(p);
      setName(n);
      setUsername(us);
       setId(i => i +1)  
       setMail(m)
       setAdress(a) 
       setAdress1(a1)
       setWorkadress(wa)
       setPhone(ph)
       setWebsite(w)
       setCname(cn)
       setVal(false);   
       
   }

   useEffect(() => {
       props.remplir(photo,name,username,id,mail,adress,adress1,workadress,phone,website,cname)
   }, [photo,name,username,id,mail,adress,adress1,workadress,phone,website,cname])
  return (<div>
      <p align="center">
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        onClick={Sval}
      >
        Ajouter Délégué
      </Button></p>
      <hr></hr>
      
     <Modal isOpen={Val} >
<Formulaire modifier={modifier} Sval={Sval}/>

</Modal>

    </div>
  );
}

export default Mod;