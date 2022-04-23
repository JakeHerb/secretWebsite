// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Contact, QueueCount, VodAsset, VideoObject } = initSchema(schema);

export {
  Contact,
  QueueCount,
  VodAsset,
  VideoObject
};