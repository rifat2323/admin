import React, { useState } from 'react';
import axios from 'axios';

const Picture = () => {
    const [fileData, setFileData] = useState<{ [key: string]: { length: number, formData: FormData } }>({});
  
    const [id,setId] = useState<string>('')
    const baseUrl = import.meta.env.VITE_BASE_URl
    const handleMouseEnter = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent<HTMLLabelElement>, name: string) => {
        e.preventDefault();
        e.stopPropagation();

        const files = e.dataTransfer.files;

        // Create a new FormData object for the specific label
        const newFormData = new FormData();
        const currentData = fileData[name] || { length: 0, formData: new FormData() };

        // Copy existing entries
        for (const [key, value] of currentData.formData.entries()) {
            newFormData.append(key, value);
        }

        // Append new files to the FormData
        Array.from(files).forEach((file, index) => {
            newFormData.append(name, file);
        });

        // Update the state with the new FormData and file length for the specific label
        setFileData(prev => ({
            ...prev,
            [name]: { length: currentData.length + files.length, formData: newFormData }
        }));
    };
    const Submit = async ()=>{
         const finalData = new FormData()
        Object.keys(fileData).forEach(label=>{
           for(const [key,value] of fileData[label].formData.entries()){
            finalData.append(key,value)
           }
        })
        try{
         const {data} = await axios.post(`${baseUrl}/pictures/${id}`,finalData)
         console.log(data)
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className='flex flex-col justify-start items-center w-full min-h-screen'>
            <h1 className='text-zinc-900 text-xl font-normal'>Upload images here</h1>
            <div className='flex flex-col px-4 justify-center items-center w-full gap-6'>
                {['color1', 'color2', 'color3', 'color4'].map((color, index) => (
                    <div key={color} className={`w-[90%] h-32 ${index ===1 ? 'bg-orange-300 ':index ===2 ? "bg-green-300": index ===3 ? "bg-red-300":"bg-blue-200"} rounded flex justify-center items-center`}>
                        <input type="file" accept='image/png, image/jpeg/' multiple id={color} style={{ display: 'none' }} />
                        <label
                            htmlFor={color}
                            style={{ cursor: "pointer", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
                            onDragEnter={handleMouseEnter}
                            onDragOver={handleMouseEnter}
                            onDragLeave={handleMouseEnter}
                            onDrop={(e) => handleDrop(e, color)}
                        >
                            <p>{fileData[color]?.length > 0 ? `You uploaded ${fileData[color].length} files` : "Only drag and drop"}</p>
                        </label>
                    </div>
                ))}
                <input type="text" value={id} onChange= {(e)=>setId(e.target.value)} name="" id=""   placeholder='paste the id here' className=' w-full border border-stone-400 rounded bg-transparent py-4 outline-none focus:border-zinc-900'/>
                <button className='w-32 bg-black rounded-md py-4 text-slate-50' onClick={Submit}>Submit</button>
            </div>
        </div>
    );
};

export default Picture;
