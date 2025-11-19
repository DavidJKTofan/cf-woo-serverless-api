import Store from '../resources_store'

const Main_Cat1 = async request => {
  const resources = new Store()
  const resourceMainCat = decodeURIComponent(request.params.main_cat1)
  
  const body = JSON.stringify(await resources.filter(resourceMainCat))
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  }
  return new Response(body, { headers })
}

export default Main_Cat1
