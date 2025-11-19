import { IRequest } from '../types'
import Store from '../resources_store'

const Resource = async (request: IRequest) => {
  const resources = new Store()
  const resourceId = request.params.id

  const body = JSON.stringify(await resources.find(resourceId))
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  }
  return new Response(body, { headers })
}

export default Resource