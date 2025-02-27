import React,{useState} from 'react'
import Product from './components/product'

const App = () => {

 

  const [data, setdata] = useState([]);
  const [edit, setedit] = useState(null);
  const [formData, setformData] = useState({
    name:"",
    discription:"",
    price:"",
    url:""
  });


  const handleChange=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value})

  }
  


  const submitHandler=(e)=>{
    e.preventDefault();

    if(edit !==null){
      data[edit]=formData;
      setedit(null)
    }
    else{
      setdata([...data,formData])

    }

   
    setformData({name:"",discription:"",price:"",url:""})



  }

  const deleteHandler=(index)=>{
   const filteredData= data.filter((_,i)=>i !==index)
    setdata(filteredData)
  }
  
  const updateHandler=(index)=>{

    setformData(data[index])
    setedit(index)

  }

  return (
    <div>

      <div className='w-full flex  justify-center items-center p-9'>
        <form onSubmit={submitHandler}  className='flex flex-col gap-3'>
          <h1 className='text-xl font-bold text-green-500'>Add new product</h1>
          <input onChange={handleChange} className='bg-neutral-300 px-4 py-2 rounded-md outline-none w-70' type="text" placeholder='Enter the product name' name='name' value={formData.name} required />
          <input onChange={handleChange} className='bg-neutral-300 px-4 py-2 rounded-md outline-none w-70' type="text" placeholder='Enter the product discription'  name='discription' value={formData.discription}  required/>
          <input onChange={handleChange} className='bg-neutral-300 px-4 py-2 rounded-md outline-none w-70' type="number" placeholder='Enter the price of the product ' name='price' value={formData.price} required/>
          <input onChange={handleChange} className='bg-neutral-300 px-4 py-2 rounded-md outline-none w-70' type="text" placeholder='Enter the URL of the product '  name='url'  value={formData.url} required/>
          <button className='bg-blue-500 px-4 py-2 rounded-md outline-none w-70 text-white' type="text">{edit !== null ? "update":"submit"}</button>
        </form>
      </div>
      <div className='p-4 flex gap-4 flex-wrap'>

       {data.map((elem , index)=>(
        <Product  key={index} data={elem} idx={index} deleteHandler={deleteHandler}  updateHandler={updateHandler} />
       ))}

        

      </div>
      
    </div>
  )
}

export default App
