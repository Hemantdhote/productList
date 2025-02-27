import React,{useState} from 'react'
import Product from './components/product'

const App = () => {

  const [data, setdata] = useState([]);
  const [formdata, setformdata] = useState({
    name:"",
    discription:"",
    price:"",
    url:""
  });

  const changeHandler=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    setdata([...data,formdata]);
    setformdata({name:"",discription:"",price:"",url:""})
  }

  return (
    <div>

      <div className='w-full flex  justify-center items-center p-9'>
        <form onSubmit={submitHandler} className='flex flex-col gap-3'>
          <h1 className='text-xl font-bold text-green-500'>Add new product</h1>
          <input onInput={changeHandler} className='bg-neutral-300 px-4 py-2 rounded-md outline-none w-70' type="text" placeholder='Enter the product name' name='name' value={formdata.name}/>
          <input onInput={changeHandler} className='bg-neutral-300 px-4 py-2 rounded-md outline-none w-70' type="text" placeholder='Enter the product discription'  name='discription' value={formdata.discription}/>
          <input onInput={changeHandler} className='bg-neutral-300 px-4 py-2 rounded-md outline-none w-70' type="number" placeholder='Enter the price of the product ' name='price' value={formdata.price}/>
          <input onInput={changeHandler} className='bg-neutral-300 px-4 py-2 rounded-md outline-none w-70' type="text" placeholder='Enter the URL of the product '  name='url' value={formdata.url}/>
          <button className='bg-blue-500 px-4 py-2 rounded-md outline-none w-70 text-white' type="text">submit</button>
        </form>
      </div>
      <div className='p-4 flex gap-4 flex-wrap'>

        {data.map((elem,index)=>(
          <Product  key={index} />
        ))}

        

      </div>
      
    </div>
  )
}

export default App
