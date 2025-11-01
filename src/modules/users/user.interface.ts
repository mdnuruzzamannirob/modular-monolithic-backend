import { BaseEntity, ISODate, UUID } from '../../core/interfaces/baseEntity';

export interface User extends BaseEntity {
  firstName: string;
  lastName: string;
  username: string;
  email: string; // unique login
  phone?: string;
  profilePicture?: string;
  passwordHash: string;
  defaultStore?: UUID;
  defaultWarehouse?: UUID;
  status: 'active' | 'inactive' | 'banned';
  lastLoginAt?: ISODate;
  tenantId?: UUID;
}
