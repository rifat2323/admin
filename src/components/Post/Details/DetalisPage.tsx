
import React, { useEffect, useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import styles from './detalis.module.css'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

type high ={
    name:string,
    icons:string,
    highlightText:string,
  }
  type brif = {
    name:string,
    value: string,
    icons : string
  
  }
  type additional = {
    name:string,
    value: string,
  }
  type info ={
    productName:string,
    price:number,
    hintInfo:string,
    description:string,
    discountPrice:number

  }
const DetalisPage = () => {
  const baseUrl = import.meta.env.VITE_BASE_URl
    const [variants , setVariants] = useState<string[]>([''])
    const [category , setCategory] = useState<string>('mobile')
  const [highlight1,setHighlight1] = useState<high>({name: '', icons : '', highlightText:''})
  const [highlight2,setHighlight2] = useState<high>({name: '', icons : '', highlightText:''})
  const [highlight3,setHighlight3] = useState<high>({name: '', icons : '', highlightText:''})
  const [highlight4,setHighlight4] = useState<high>({name: '', icons : '', highlightText:''})
  const [highlight5,setHighlight5] = useState<high>({name: '', icons : '', highlightText:''})
  const [highlight6,setHighlight6] = useState<high>({name: '', icons : '', highlightText:''})
  const [brif,setBrif] = useState<brif[]>([{name: '', icons : '', value:''}])
  const [additional ,setAdditional] = useState<additional[]>([{name:"", value:""}])
  const [color,setColor] = useState<string[]>([''])
  const [productInfo,setPorductInfo] = useState<info>({productName:'',price:0,hintInfo:'',description:'',discountPrice:0})
  const [copyText,setCopyText] = useState<string>('')
    console.log(highlight1)
  const handelAddVariant = ()=>{
     setVariants((prev)=> [...prev,''])
  }
  const HandelVariantChnage = (e:React.ChangeEvent<HTMLInputElement>, index:number) =>{
      const value = e.target.value;
     const newVariant = [...variants];
     newVariant[index] = value;
     setVariants(newVariant)

  }
  useEffect(()=>{
    
    const newname =  Date.now().toString() 
    setCopyText(newname)

  },[productInfo.productName, productInfo.price])
 /*  const handleAddVariants = () => {
    setHighlight([...highlight, { name: '', icons: '', highlightText: '' }]);
  };
  const handelHighLightText =(index:number,e:React.ChangeEvent<HTMLInputElement>,fild )=>{
    const value = e.target.value;
    const icons = (index + 1).toString()
    const newHighlight = [...highlight];
    newHighlight[index] = { ...newHighlight[index], [fild]: value,icons:icons };
    setHighlight(newHighlight);
  } */
  const handleAddBrif = () => {
    setBrif([...brif, { name: '', icons: '', value: '' }]);
  };
  const handelAdBrifText =(index:number,e:React.ChangeEvent<HTMLInputElement>,fild )=>{
    const value = e.target.value;
    const icons = (index + 1).toString()
    const newHighlight = [...brif];
    newHighlight[index] = { ...newHighlight[index], [fild]: value,icons:icons };
    setBrif(newHighlight);
  }


  const handleAdditional = () => {
    setAdditional([...additional, { name: '', value: '' }]);
  };
  const handelAdditional=(index:number,e:React.ChangeEvent<HTMLInputElement>,fild )=>{
    const value = e.target.value;
    
    const newHighlight = [...additional];
    newHighlight[index] = { ...newHighlight[index], [fild]: value };
    setAdditional(newHighlight);
  }
  const handelAddColor = ()=>{
    setColor((prev)=>[...prev,''])
  }
  const HandelColorChange = (e:React.ChangeEvent<HTMLInputElement>,index)=>{
     const newColor = [...color]
     newColor[index] = e.target.value;
     setColor(newColor)

  }
  const handelSubmitToServer= async (id:string):Promise<void> =>{
    const arrayhightlihgt = [{...highlight1},{...highlight2},{...highlight3},{...highlight4},{...highlight5},{...highlight6}]
       const newObj = {...productInfo,id:id,color:color,variant:variants, highlight:arrayhightlihgt,brif:brif,additional:additional,uniqId:copyText}
        console.log(newObj)
        try{
            const {data} = await axios.post(`${baseUrl}/product`, {newObj})
            console.log(data)
        }catch(error){
          console.log(error)
        }
       
  } 

  return (
    <>
    <div className={styles.inputsDiv}>
    <select onChange={(e)=>setCategory(e.target.value)} className='w-32 bg-transparent rounded border border-stone-200 h-12'>
          <option value="mobile">mobile</option>
          <option value="camera">camera</option>
          <option value="computers">computers</option>
        </select>
    <label htmlFor="productName"  className={styles.lable}>
     <p>Product Name:</p>
     <input type="text" id='productName' value={productInfo.productName} onChange={(e)=>setPorductInfo({...productInfo,productName:e.target.value})} tabIndex={1} className={styles.input} placeholder='product name'/>
    </label>
    <label htmlFor="Price"  className={styles.lable}>
    <p>Product Price:</p>
     <input type="number" id='Price' value={productInfo.price} onChange={(e)=>setPorductInfo({...productInfo,price:parseInt(e.target.value)})} tabIndex={2} className={styles.input} pattern='[0-9]' placeholder='333'/>
    </label>
    <label htmlFor="Price"  className={styles.lable}>
    <p>Discount  Price:</p>
     <input type="number" id='Price' value={productInfo.discountPrice} onChange={(e)=>setPorductInfo({...productInfo,discountPrice:parseInt(e.target.value)})} tabIndex={2} className={styles.input} pattern='[0-9]' placeholder='333'/>
    </label>
    
    <div className={styles.text}>
     <p>Description:</p>
     <textarea name="" id="" value={productInfo.description} onChange={(e)=>setPorductInfo({...productInfo,description:e.target.value})} rows={10} cols={23} className={styles.textarea} placeholder='enter your product details' tabIndex={4}></textarea>
    </div>
    <div className={styles.text}>
     <p>HintInfo:</p>
     <textarea name="" id="" rows={10} cols={23} value={productInfo.hintInfo} onChange={(e)=>setPorductInfo({...productInfo,hintInfo:e.target.value})} className={styles.textarea} placeholder='enter your product details' tabIndex={4}></textarea>
    </div>

   
   </div>
   <div className={styles.colorPicker}>
     <h4 >add color: ( hex only )</h4>
     <div className={styles.variant}>
       {
         color.map((item,index)=>(
           <div key={index} className=' flex justify-center  items-center gap-2'>
                <input type="text" value={item} className={ `${styles.input} ${styles.small}`} key={index} onChange={(e)=>HandelColorChange(e,index)}/>
                <p className={styles.colorShower}  style={{background:item}}></p>
           </div>
      
           

         ))
       }
     
       <IoMdAdd size={30} style={{boxShadow:"0px 1px 4px -1px rgba(0,0,0,0.5)", borderRadius:"50%", marginTop:"10px", cursor:"pointer"}} onClick={()=>handelAddColor()}/>
     </div>
    </div>
   
   <div className={styles.variant}>
     <h4>Add Variant:</h4>
     <div className={styles.variant}>
       {
         variants.map((item,index)=>(
           <input type="text" value={item} className={styles.input_full} key={index} onChange={(e)=>HandelVariantChnage(e,index)}/>
         ))
       }
     
       <IoMdAdd size={30} style={{boxShadow:"0px 1px 4px -1px rgba(0,0,0,0.5)", borderRadius:"50%", marginTop:"10px", cursor:"pointer"}} onClick={()=>handelAddVariant()}/>
     </div>
    </div>
   <div className={styles.variant}>
     <h4>Add highLightText:</h4>
     <div className={styles.variant}>
        {
          category === "mobile" && (
            <>
            <div className=' mb-3  w-full flex flex-col gap-2 shadow-md border-b-2 py-3 border-stone-950'>
            <input type="text" value={highlight1.name} className={styles.input_full} onChange={(e)=>setHighlight1((prev)=>({...prev,name:e.target.value,icons:"https://res.cloudinary.com/dvudy4grb/image/upload/v1717663750/tech/qpltlmlmdipzau0gziea.png"}))} placeholder='display'/>
            
            <input type="text" value={highlight1.highlightText} className={styles.input_full}  onChange={(e)=>setHighlight1((prev)=>({...prev,highlightText:e.target.value}))} placeholder='ex:5.5'/>
             
            </div>
            <div className=' mb-3  w-full flex flex-col gap-2 shadow-md py-3 border-b-2 border-stone-950'>
            <input type="text" value={highlight2.name} className={styles.input_full} onChange={(e)=>setHighlight2((prev)=>({...prev,name:e.target.value,icons:"https://res.cloudinary.com/dvudy4grb/image/upload/v1717663843/tech/egr6vbozfpx6fur74wl5.png"}))} placeholder='cpu'/>
          
            <input type="text" value={highlight2.highlightText} className={styles.input_full}  onChange={(e)=>setHighlight2((prev)=>({...prev,highlightText:e.target.value}))} placeholder='snapDragon'/>
             
            </div>
 
            <div className=' mb-3  w-full flex flex-col gap-2 shadow-md py-3 border-b-2 border-stone-950'>
            <input type="text" value={highlight3.name} className={styles.input_full} onChange={(e)=>setHighlight3((prev)=>({...prev,name:e.target.value,icons:"https://res.cloudinary.com/dvudy4grb/image/upload/v1717663892/tech/rxofgjme3b5pcg57dwrs.png"}))} placeholder='number of cores'/>
    
            <input type="text" value={highlight3.highlightText} className={styles.input_full}  onChange={(e)=>setHighlight3((prev)=>({...prev,highlightText:e.target.value}))} placeholder='8'/>
             
            </div>
         
 
            <div className=' mb-3  w-full flex flex-col gap-2 shadow-md py-3 border-b-2 border-stone-950'>
            <input type="text" value={highlight4.name} className={styles.input_full} onChange={(e)=>setHighlight4((prev)=>({...prev,name:e.target.value,icons:"https://res.cloudinary.com/dvudy4grb/image/upload/v1717663935/tech/o09fhnmjcgbeuoqjd3z4.png"}))} placeholder='back camera'/>
           
            <input type="text" value={highlight4.highlightText} className={styles.input_full}  onChange={(e)=>setHighlight4((prev)=>({...prev,highlightText:e.target.value}))} placeholder='16mp'/>
             
            </div>
            <div className=' mb-3  w-full flex flex-col gap-2 shadow-md py-3 border-b-2 border-stone-950'>
            <input type="text" value={highlight5.name} className={styles.input_full} onChange={(e)=>setHighlight5((prev)=>({...prev,name:e.target.value,icons:"https://res.cloudinary.com/dvudy4grb/image/upload/v1717663935/tech/o09fhnmjcgbeuoqjd3z4.png"}))} placeholder='front camera'/>
         
            <input type="text" value={highlight5.highlightText} className={styles.input_full}  onChange={(e)=>setHighlight5((prev)=>({...prev,highlightText:e.target.value}))} placeholder='16mp'/>
             
            </div>
            <div className=' mb-3  w-full flex flex-col gap-2 shadow-md py-3 border-b-2 border-stone-950'>
            <input type="text" value={highlight6.name} className={styles.input_full} onChange={(e)=>setHighlight6((prev)=>({...prev,name:e.target.value,icons:"https://res.cloudinary.com/dvudy4grb/image/upload/v1717663981/tech/fz6tx0el487ao9neel5v.png"}))} placeholder='battery'/>
 
            <input type="text" value={highlight6.highlightText} className={styles.input_full}  onChange={(e)=>setHighlight6((prev)=>({...prev,highlightText:e.target.value}))} placeholder='5000'/>
             
            </div>
            </>
          )
        }
        
           {
            category === "computers" && (
              <>
                 <div className=' mb-3  w-full flex flex-col gap-2 shadow-md py-3 border-b-2 border-stone-950'>
            <input type="text" value={highlight1.name} className={styles.input_full} onChange={(e)=>setHighlight1((prev)=>({...prev,name:e.target.value,icons:"https://res.cloudinary.com/dvudy4grb/image/upload/v1717663843/tech/egr6vbozfpx6fur74wl5.png"}))} placeholder='processor'/>
          
            <input type="text" value={highlight1.highlightText} className={styles.input_full}  onChange={(e)=>setHighlight1((prev)=>({...prev,highlightText:e.target.value}))} placeholder='amd'/>
             
            </div>
            <div className=' mb-3  w-full flex flex-col gap-2 shadow-md py-3 border-b-2 border-stone-950'>
            <input type="text" value={highlight2.name} className={styles.input_full} onChange={(e)=>setHighlight2((prev)=>({...prev,name:e.target.value,icons:"https://res.cloudinary.com/dvudy4grb/image/upload/v1717663892/tech/rxofgjme3b5pcg57dwrs.png"}))} placeholder='number of cores'/>
    
            <input type="text" value={highlight2.highlightText} className={styles.input_full}  onChange={(e)=>setHighlight2((prev)=>({...prev,highlightText:e.target.value}))} placeholder='8'/>
             
            </div>
            <div className=' mb-3  w-full flex flex-col gap-2 shadow-md py-3 border-b-2 border-stone-950'>
            <input type="text" value={highlight3.name} className={styles.input_full} onChange={(e)=>setHighlight3((prev)=>({...prev,name:e.target.value,icons:"https://res.cloudinary.com/dvudy4grb/image/upload/v1717676385/tech/wiifqe1e4hx5w2i62qgk.png"}))} placeholder='ssd'/>
    
            <input type="text" value={highlight3.highlightText} className={styles.input_full}  onChange={(e)=>setHighlight3((prev)=>({...prev,highlightText:e.target.value}))} placeholder='200gb'/>
             
            </div>

              </>
            )
           }
        
       
     
    
     </div>
    </div>
   <div className={styles.variant}>
     <h4>Add brifInfo:</h4>
     <div className={styles.variant}>
       {
         brif.map((item,index)=>(
           <>
           <input type="text" value={item.name} className={styles.input_full} key={index} onChange={(e)=>handelAdBrifText(index,e,"name")} placeholder='ex: free delivery'/>
           <input type="text" value={item.value} className={styles.input_full} key={index} onChange={(e)=>handelAdBrifText(index,e,'value')} placeholder='ex:1-3 days'/>
            
           </>
         ))
       }
     
       <IoMdAdd size={30} style={{boxShadow:"0px 1px 4px -1px rgba(0,0,0,0.5)", borderRadius:"50%", marginTop:"10px", cursor:"pointer"}} onClick={()=>handleAddBrif()}/>
     </div>
    </div>
   <div className={styles.variant}>
     <h4>Additional:</h4>
     <div className={styles.variant}>
       {
         additional.map((item,index)=>(
           <>
           <input type="text" value={item.name} className={styles.input_full} key={index} onChange={(e)=>handelAdditional(index,e,"name")} placeholder='ex: feature'/>
           <input type="text" value={item.value} className={styles.input_full} key={index} onChange={(e)=>handelAdditional(index,e,'value')} placeholder='ex:extra big screen'/>
            
           </>
         ))
       }
     
       <IoMdAdd size={30} style={{boxShadow:"0px 1px 4px -1px rgba(0,0,0,0.5)", borderRadius:"50%", marginTop:"10px", cursor:"pointer"}} onClick={()=>handleAdditional()}/>
     </div>
     <div className=' flex justify-center items-center gap-2 mb-3'>

  
     <input type="text"  value={copyText}  readOnly className={ `${styles.input}`} />
     <button className=' w-32 h-20 rounded border-stone-800 border cursor-pointer' onClick={(e)=>{
       navigator.clipboard.writeText(copyText).then(()=>window.alert("text copied"))
     }}>Copy to clipboard</button>
     </div>
     <button className=' w-32 h-12 border bg-slate-950 text-slate-50 rounded mb-10' onClick={()=>handelSubmitToServer(uuidv4())}>Submit</button>
    </div>
    </>
  
  )
}

export default DetalisPage