import React, { Component , useState , useEffect } from "react";
import Mod from "./modal.js";
import Visualiser from "./visualiser.js";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Grid  from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Visph from "./visph.js"
import Avat from './avatar.js'
import Axios from 'axios'
//cell style
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  
}))(TableCell);
//row style
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
//creation du contenu de la table
function createData(photo,name, id, mail, adress,adress1,workadress, phone, website, cname) {
  return { photo,name, id, mail, adress,adress1,workadress,phone,website,cname };
}

const rows = [
  
];
//table styles
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  });
function Tableau() {
    
   const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
   const [id, setId] = useState(0);
   const [mail, setMail] = useState('');
   const [adress, setAdress] = useState('');
   const [adress1, setAdress1] = useState('');
   const [workadress, setWorkadress] = useState('');
   const [phone, setPhone] = useState('');
   const [website, setWebsite] = useState('');
   const [cname, setCname] = useState('');
   //pour remplier juste dans la page sans la BD
   /*const remplir =(p,n,u,i,m,a,a1,wa,ph,w,cn)=>
   {
      setPhoto(p);
     setName(n);
     setUsername(u);
     setId(i);
     setMail(m);
     setAdress(a);
     setAdress1(a1);
     setWorkadress(wa);
     setPhone(ph);
     setWebsite(w);
     setCname(cn);

     if (i && n && m && a && ph && w && cn) 
     {
rows.push(createData(p,n,i,m,a,a1,wa,ph,w,cn))
        } 
   }*/
   //pour remplir dans la base de données
    const remplir =(p,n,u,i,m,a,a1,wa,ph,w,cn)=>
   { if (i && n && u && m && a1 && ph && w && cn) 
    {
    Axios.post( "http://localhost:8080/adduser" , {
      name: n ,
      username : u ,
      mail:m ,
      phone:ph ,
      website:w ,
      cname:cn,
      adress:a,
      adress1:a1,
      workadress:wa,
      })
      .then(res => {
        console.log(res)
      })
      window.location.reload(false);
    }
    
  }
  //visualiser (eye)
   const [vs, setVs] = useState(false)

  const [data, setdata] = useState({photo:'',name:'', mail:'', adress:'' , phone:'',website:'',cname:''})

  const visualiser = (p,n,m,a,ph,w,cn) =>
  {
    setdata({photo: p,name:n, mail: m , adress: a , phone:ph , website:w , cname:cn})
    nonvs(vs)
  }
  const nonvs = () =>
  {
    setVs(!vs);
  }
   //visualiser photo
   const[av,setAv]=useState(false);
   const[ph,setPh]=useState('');
   const[na,setNa]=useState('');
   const[ad,setAd]=useState('');
   const nonav=(av)=>{
     setAv(!av);
   }
   const visph = (p,n,a)=>{
     setPh(p);
     setNa(n);
     setAd(a);
     nonav(av);
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
  //delete a row : 
  // on commence par stocker tout les données du tableau dans la constante users :
 /* const [users, setUsers] = useState([]);
  useEffect(() => {
    // fetch API / JSON => ArrayJS
    if (rows && rows.length > 0)
     {setUsers(rows);}
    
  }, [users]);
  //mtn on supprime la ligne voulu
  const handleDelete = (index) => () => {
    // Clone
  //  post.push(users);
    const newUsers = [...post];
    newUsers.splice(index, 1);
    setPost(newUsers);
  };*/
  //Delete from data base :
  const handleDelete = (index) =>()=> {
    alert("it works")
      Axios.delete( `http://localhost:8080/delete/${index}`)
      .then(res => {
        if(res.data!=null)
        alert("it works")
      })
      const refresh = post.filter((result) => result.id !== index)
      setPost(refresh)
    
  };
  //prendre les données de l'API users
  const [post,setPost]=useState([])
  useEffect(() => {
    fetch('http://localhost:8080/allusers')
    .then((response)=>{
    return response.json()
  })
  .then((result)=>{
setPost(result);
})

}, [post])
//prendre les données de l'API adresses
const [post1,setPost1]=useState([])
useEffect(() => {
  fetch('http://localhost:8080/alladresses')
  .then((res)=>{
  return res.json()
})
.then((resultat)=>{
setPost1(resultat);
})
}, [post1])
//fonction de comparaison de l'id de la table users et le userid de adresses

  const classes = useStyles();
  
  return (
    
   <div>
       <h1 align="center">Liste délégués</h1>
       <br/>
       <Mod  remplir={remplir}/>
       <Visualiser data={data} nonvs={nonvs} vs={vs} />
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom complet</StyledTableCell>
            <StyledTableCell align="center">Adresse mail</StyledTableCell>
            <StyledTableCell align="left">Adresse postale</StyledTableCell>
            <StyledTableCell align="center">Numéro</StyledTableCell>
            <StyledTableCell align="center">Site web</StyledTableCell>
            <StyledTableCell align="center">Nom entreprise</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          
          {post.map((row,index) => (
            <StyledTableRow key={row.name}>             
              <StyledTableCell component="th" scope="row"> <Grid container>
             <Grid item lg={2}><Avat visph={visph} name={row.name} date={row.date} photo= {row.photo}/></Grid> <Grid item lg={10}><Typography style={{margin:"7px"}}>&nbsp;&nbsp;&nbsp;{row.name}
             </Typography></Grid>  </Grid>   
              </StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              {post1.map((roww,index) => ( roww.UserId==row.id ? 
              <StyledTableCell align="left"><b>Adresse primaire:</b>{roww.home_adress1}<br></br>
            <b>Adresse secondaire:</b>{roww.home_adress2} <br></br>
            <b>Lieu de travail:</b>{roww.work_adress} <br></br></StyledTableCell>  
              :''))}
              <StyledTableCell align="left">{row.phone}</StyledTableCell>
              <StyledTableCell align="left">{row.website}</StyledTableCell>
              <StyledTableCell align="left">{row.company_name}</StyledTableCell>
              {post1.map((roww,index) => ( roww.UserId==row.id ?  <StyledTableCell align="center"><IconButton aria-label="delete" className={classes.margin}
              onClick={handleDelete (row.id)}
            >
          <DeleteIcon />
        </IconButton>
        
        <IconButton aria-label="visionner" className={classes.margin} 
        onClick={() => visualiser(row.photo,row.name,roww.home_adress1,row.email, row.phone , row.website , row.company_name)}
       >
          <VisibilityIcon />
        </IconButton></StyledTableCell>:''))}
            </StyledTableRow>
            ))}
        </TableBody>
       
      </Table>
    </TableContainer>
    <Visph av={av} nom={nom} prenom={prenom} nonav={nonav} ph={ph} na={na} ad={ad}/>
    </div>
  );
}

export default Tableau;