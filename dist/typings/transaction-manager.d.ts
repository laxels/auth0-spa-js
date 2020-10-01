import { ClientStorage } from './storage';
interface Transaction {
  nonce: string;
  scope: string;
  audience: string;
  appState?: any;
  code_verifier: string;
  redirect_uri: string;
}
export default class TransactionManager {
  private sessionManager;
  private cookieManager;
  constructor(storage: ClientStorage);
  create(state: string, transaction: Transaction): void;
  get(state: string): Transaction;
  remove(state: string): void;
}
export {};
