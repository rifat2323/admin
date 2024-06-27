
import { useLocation,Location } from "react-router";

const Pathname = ():string => {
    const path:Location = useLocation()
  return path.pathname
    
}
const PathnameDisplay = () => {
    const path = Pathname();

    return <div>Current Path: {path}</div>;
  };
  
export { Pathname,PathnameDisplay}