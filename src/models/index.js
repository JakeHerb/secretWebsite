// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Contact, VodAsset, VideoObject } = initSchema(schema);

export {
  Contact,
  VodAsset,
  VideoObject
};