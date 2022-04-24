import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ContactMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QueueCountMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VodAssetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VideoObjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Contact {
  readonly id: string;
  readonly email: string;
  readonly affinity: string;
  readonly placeInQueue: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Contact, ContactMetaData>);
  static copyOf(source: Contact, mutator: (draft: MutableModel<Contact, ContactMetaData>) => MutableModel<Contact, ContactMetaData> | void): Contact;
}

export declare class QueueCount {
  readonly id: string;
  readonly count: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QueueCount, QueueCountMetaData>);
  static copyOf(source: QueueCount, mutator: (draft: MutableModel<QueueCount, QueueCountMetaData>) => MutableModel<QueueCount, QueueCountMetaData> | void): QueueCount;
}

export declare class VodAsset {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly video?: VideoObject | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly vodAssetVideoId?: string | null;
  constructor(init: ModelInit<VodAsset, VodAssetMetaData>);
  static copyOf(source: VodAsset, mutator: (draft: MutableModel<VodAsset, VodAssetMetaData>) => MutableModel<VodAsset, VodAssetMetaData> | void): VodAsset;
}

export declare class VideoObject {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<VideoObject, VideoObjectMetaData>);
  static copyOf(source: VideoObject, mutator: (draft: MutableModel<VideoObject, VideoObjectMetaData>) => MutableModel<VideoObject, VideoObjectMetaData> | void): VideoObject;
}