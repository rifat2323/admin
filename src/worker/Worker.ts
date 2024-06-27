import axios  from "axios";

const fetchWorker:Worker = self as any;

fetchWorker.onmessage= async (event) =>{
    const url =event.data;
    try{
    const {data} =await axios.get(url)
    fetchWorker.postMessage(data)
    }catch(error){
        console.log(error)
    }

}


