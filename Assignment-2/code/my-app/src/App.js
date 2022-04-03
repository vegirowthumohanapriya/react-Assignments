import logo from './logo.svg';
import './App.css';
import './index';



function App(props) {
 const {employee} =props;
    
return(
<div className="container">
       
        <div className="image">
          <img src= {employee.profileImg} ></img>
          <h1>{employee.name}</h1>
          <p class="p1">Location</p>
          <h3 class="city">{employee.location}</h3>
          <p class="p2">Blood Group</p>
          <h3 class="blood">{employee.bloodGroup}</h3>
          <p class="p3">Age</p>
          <h3 class="age">{employee.age}</h3>
</div>
    </div>
   
  
  );
}


export default App;
