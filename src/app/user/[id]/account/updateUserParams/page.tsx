
import { notFound } from "next/navigation"
import UserMeasurementsForm from "./UserMeasurementsForm"

const ParamsForm = async ({params}: {params : { id : string }}) => {

  const getUser = await fetch(`https://fitp-be.vercel.app/getUser?id=${params.id}`)

  const { id } = await getUser.json()

  if(getUser.status !== 200) {
    notFound()
  } 

  
  return (
    <>
      <UserMeasurementsForm id={id}></UserMeasurementsForm>
    </>
  )
}

export default ParamsForm