import React from 'react'

export default function PizzaForm(props){
    const { values, submit, change, errors } = props;

    const onSubmit = (evt) => {
      evt.preventDefault();
      submit();
    };
  
    const onChange = (evt) => {
      const { name, value, checked, type } = evt.target;
      const correctValue = type === "checkbox" ? checked : value;
      change(name, correctValue);
    };
  
    return (
     <form className='form-container' onSubmit={onSubmit}>
         <div>
             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqB3Xa6x4bN8j-0-JpuvS3jwZxw78CY6WPCA&usqp=CAU'/>
         </div>
         
        <div className="form-group inputs">
        <h2>Make A Pie</h2>
        <div>      
        <label>
            <h3>Name</h3>
            <input
            value={values.name}
            name='name'
            type='text'
            onChange={onChange}
            />
        </label>
        </div>
        <div>
            <h3>Start your Pizza</h3>
        <label>
          Choose you size
          <select
            value={values.size}
            onChange={onChange}
            name="size"
            >
                <option value=''>-------</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>
        </label>

        <label>
          Sauce Choice
          <select
            value={values.sauce}
            onChange={onChange}
            name="sauce"
            >
                <option value=''>-------</option>
                <option value='red'>Red Sauce</option>
                <option value='alfredo'>Alfedo</option>
                <option value='ranch'>Ranch</option>
            </select>
        </label>
            </div>
      
        <div>
        <h3>Toppings</h3>
        <label>
            Pepperoni
            <input
            type='checkbox'
            name='pepperoni'
            checked={values.pepperoni}
            onChange={onChange}
            />
        </label>
        <label>
            Mushroom
            <input
            type='checkbox'
            name='mushroom'
            checked={values.mushroom}
            onChange={onChange}
            />
        </label>
        <label>
            Onion
            <input
            type='checkbox'
            name='onion'
            checked={values.onion}
            onChange={onChange}
            />
        </label>
        <label>
            Feta
            <input
            type='checkbox'
            name='feta'
            checked={values.feta}
            onChange={onChange}
            />
        </label>
        </div>
        <div>
            <h3>Special Instructions</h3>
            <label>
            <input
            value={values.instructions}
            name='instructions'
            type='text'
            onChange={onChange}
            />
            </label>
        </div>
       </div>
       <button>Submit</button>
     </form>
    );
}