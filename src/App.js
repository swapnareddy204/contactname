import React ,{useState,useEffect} from "react";
import "./App.css";
import ContactCard from "./ContactCard";

const App =()=>{
// const contacts=[
//   {
//     avatarUrl:"http://via.placeholder.com/150",
//     name:"Jenny haun",
//     email:"jennyhaun@notreacl.com",
//     age:20
//   },
//   {
//     avatarUrl:"http://via.placeholder.com/150",
//     name:"Paul John",
//     email:"PaulJohn@notreacl.com",
//     age:30
//   },
//   {
//     avatarUrl:"http://via.placeholder.com/150",
//     name:"Peter pan",
//     email:"Peterpan@notreacl.com",
//     age:40
//   },
//   {
//     avatarUrl:"http://via.placeholder.com/150",
//     name:"Lisa simpson",
//     email:"Lisasimpson@notreacl.com",
//     age:50
//   },
// ] ;
const [results,setResults]=useState([]);

useEffect(()=>{
  fetch("https://randomuser.me/api/?results=10")
  .then(response=> response.json())
  .then(data=> {
    // console.log(data)
  setResults(data.results);
  }
  );
},[])


  return(
    <div>
      <h2>Contact List</h2>
      {
        results.map((result,index)=>{
          return (
            <ContactCard key={index}
            avatarUrl ={result.picture.large}
            name ={result.name.first}
            email ={result.email}
            age ={result.dob.age}
            ></ContactCard>
          )
        })
      }
 
  
   </div>
  )
}
export default App
