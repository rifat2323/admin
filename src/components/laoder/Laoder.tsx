import { DNA } from "react-loader-spinner"

const Laoder = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
    <DNA
    visible={true}
    height="250"
    width="250"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    />
    </div>
  )
}

export default Laoder