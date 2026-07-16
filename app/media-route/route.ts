import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { email } from 'payload/shared'

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection:"media",
  })
     return Response.json(data)
}
