import styles from './short.module.css'
import {useState} from 'react'
import axios from 'axios';


type obj ={
  BrandName?:string,
  ScreenSize?:string,
  Memory?:string,
  Battery?:string,
  id:string,
  discount: number,
  ssd?:number,
  ram?:number,
  processor?:string


}
const Short = () => {

  const baseUrl = import.meta.env.VITE_BASE_URl

  const [dragging, setDragging] = useState(false);
  const [category, setCategory] = useState('mobile');
  const [fileName, setFileName] = useState('');
  const [sortObj, setShortObj] = useState<obj>({BrandName:'',ScreenSize:"",Memory:"",Battery:"",id:'',discount:0,ssd:0,ram:0,processor:''});
  const [imags, setImags] = useState<File | null>(null);
 
   console.log(category)

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const files = e.dataTransfer.files;
   
    if (files.length > 0) {
      setFileName(files[0].name);
      setImags(files[0])
      console.log(files[0].name);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setImags(file);
      console.log(file.name);
    }
  };
  const handelSubmit = async ():Promise<void> =>{
    const formData = new FormData()
 
    if(imags){
      formData.append("image",imags )
    }
    
      
      formData.append('sortObj', JSON.stringify(sortObj))
      /* console.log(formData) */
      try{
        const {data}= await axios.post(`${baseUrl}/adminpost/shortdetailse/${category}`,formData,{
          headers:{
            "Content-Type":"multipart/form-data"
          }
        })
        console.log(data)
      }catch(error){
        console.log(error)
      }
  }

  return (
    <div className={styles.mainDiv}>
      <div className='flex w-full justify-between px-2 flex-wrap items-center mb-7'> 
        <h1 className='text-xl text-stone-950'>Write a small details for your product</h1>
        <select onChange={(e)=>setCategory(e.target.value)} className='w-32 bg-transparent rounded border border-stone-200 h-12' >
          <option value="mobile">mobile</option>
          <option value="camera">camera</option>
          <option value="computers">computers</option>
        </select>
      </div>

      <form action="" className={styles.form}>
        {
          category === "mobile" && (
            <>
          
            <input type="text" value={sortObj.BrandName} placeholder='Brand name' className={styles.inputs} onChange={(e)=>setShortObj((prev)=>({...prev,BrandName:e.target.value}))} />
        <input type="text" value={sortObj.ScreenSize} placeholder='Screen size ex:5.6' className={styles.inputs}  onChange={(e)=>setShortObj((prev)=>({...prev,ScreenSize:e.target.value}))} />
        <input type="text"  value={sortObj.Memory} placeholder='Memory' className={styles.inputs} onChange={(e)=>setShortObj((prev)=>({...prev,Memory:e.target.value}))}  />
        <input type="text"  value={sortObj.Battery} placeholder='Battery' className={styles.inputs}  onChange={(e)=>setShortObj((prev)=>({...prev,Battery:e.target.value}))} />
        </>
          )
        }
        {
          category === "computers" && (
            <>
             <input type="number"  value={sortObj.ssd} placeholder='enter ssd only number' className={styles.inputs}  onChange={(e)=>setShortObj((prev)=>({...prev,ssd:parseInt(e.target.value)}))} />
             <input type="number"  value={sortObj.ram} placeholder='enter ram only number' className={styles.inputs}  onChange={(e)=>setShortObj((prev)=>({...prev,ram:parseInt(e.target.value)}))} />
             <input type="text"  value={sortObj.processor} placeholder='processor' className={styles.inputs}  onChange={(e)=>setShortObj((prev)=>({...prev,processor:e.target.value}))} />

            </>
          )
        }
        <input type="text"  value={sortObj.id} placeholder='paste the id here you got from other page' className={styles.inputs}  onChange={(e)=>setShortObj((prev)=>({...prev,id:e.target.value}))} />
        <input type="number"  value={sortObj.discount} placeholder='optical discount' className={styles.inputs}  onChange={(e)=>setShortObj((prev)=>({...prev,discount:parseInt(e.target.value)}))} />
        <div 
          className=' w-36 lg:w-[60%] h-32 lg:h-[20rem] bg-slate-300 rounded-md flex justify-center items-center flex-col' 
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input 
            type="file" 
            accept="image/png, image/jpeg" 
            className={styles.input} 
            onChange={handleFileChange} 
            style={{ display: 'none' }} 
            id="fileInput"
          />
          <label htmlFor="fileInput" className='cursor-pointer'>
            <p className='mt-3 mb-2'>{fileName ? fileName : 'Drag and drop here'}</p>
          </label>
        </div>
        
      </form>
      <button type='submit' className=' w-36 h-14 flex justify-center items-center border-none bg-slate-950 rounded my-5 text-slate-100' onClick={handelSubmit}>Submit</button>
      {imags && <img src={URL.createObjectURL(imags)} alt="" width={80} height={50} />}
    </div>
  )
}

export default Short
