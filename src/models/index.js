// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Contact, User, QueueCount, VodAsset, VideoObject } = initSchema(schema);

export {
  Contact,
  User,
  QueueCount,
  VodAsset,
  VideoObject
};