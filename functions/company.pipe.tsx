import { companyRef } from './../app/services/data.service'
import { pushToObject } from '../app/services/mapping.service'
export async function getCompany(key: any) {
  const doc: any = await companyRef().doc(key).get()
  const item: any = await pushToObject(doc)
  return item.fileUrl
}
