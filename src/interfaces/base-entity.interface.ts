// Utility / Common Types
export type UUID = string;
export type ISODate = string; // e.g., new Date().toISOString()

export interface BaseEntity {
  isDeleted: boolean;
  createdBy?: UUID;
  updatedBy?: UUID | null;
  deletedBy?: UUID | null;
  createdAt: ISODate;
  updatedAt: ISODate;
  deletedAt?: ISODate | null;
}
