import React, { useState } from "react";
import {Link, Route, Switch} from 'react-router-dom'
import{styles} from './App.css'
import Home from './Home'
import axios from 'axios'
import * as yup from 'yup'
import schema from "./formSchema";
import PizzaForm from "./Form";
import Pizza from './Pizza'


const initialFormValues={
  name:'',
  size:'',
  sauce:'',
  pepperoni:false,
  mushroom:false,
  onion:false,
  feta:false,
  instructions:'',
}
const initialFormErrors={
  size:'',
  sauce:'',
}
const initialPizza=[];


const App = () => {
  const [pizza, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] =useState(initialFormErrors)

  const postNewPizza=(newPizza)=>{
    axios
    .post('https://reqres.in/api/users', newPizza)
    .then((res)=>{
      setPizza([res.data,...pizza])
      setFormValues(initialFormValues)  
    })
    .catch((err) => {
      console.log(err);
    });
  }
  const inputChange = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(()=>{
      setFormErrors({
        ...formErrors,
        [name]:"",
      })
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });
  setFormValues({
    ...formValues,
    [name]: value,
  });
  }
  const formSubmit = ()=>{
    const newPizza ={
      name:formValues.name.trim(),
      size:formValues.size.trim(),
      sauce:formValues.sauce.trim(),
      topping: ["pepperoni", "mushroom", "onion", 'feta'].filter((top) => formValues[top]),
      instructions:formValues.instructions.trim(),
    }
    postNewPizza(newPizza)
  }
  

  return (
    <div className='App'>
      <nav>
        <h1 className='nav-header'>Lambda Eats</h1>
          <div className='nav-links'>
            <Link to ='/'>Home</Link>
            <Link to ='/pizza'>Pizza</Link>
          </div>
      </nav>
      <Switch>
      <Route path='/pizza'>
        <PizzaForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
        />
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
      </Switch>
      {pizza.map((pizza) => {
        return <Pizza key={pizza.id} details={pizza} />;
      })}

    </div>
  );
};
export default App;
