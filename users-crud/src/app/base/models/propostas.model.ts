import { Client } from './clients.model';

export interface Propostas {
  description: string;

  status: string;

  cliente?: Client;
}
