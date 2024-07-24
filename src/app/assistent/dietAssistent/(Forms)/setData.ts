const setDataInLocal = <T>(data: T, key: string, spread = true) => {
  const dataObjExists = localStorage.getItem(key)

  if(!dataObjExists) {
    localStorage.setItem(key, JSON.stringify(data))
    return
  }
  const existingData = JSON.parse(dataObjExists)
  
  const updateData = spread ? {...existingData, ...data} : {...existingData, data}
  localStorage.setItem(key, JSON.stringify(updateData))
}

export default setDataInLocal