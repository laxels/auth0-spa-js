import { ClientStorage } from './storage';
import * as CookieStorage from './cookie-storage';

const TRANSACTION_STORAGE_KEY = 'a0.spajs.txs';

interface Transaction {
  nonce: string;
  scope: string;
  audience: string;
  appState?: any;
  code_verifier: string;
  redirect_uri: string;
}

class SessionStorageTransactionManager {
  private transaction: Transaction;

  constructor(private storage: ClientStorage) {
    this.transaction = this.storage.get(TRANSACTION_STORAGE_KEY);
  }

  public create(transaction: Transaction) {
    this.transaction = transaction;

    this.storage.save(TRANSACTION_STORAGE_KEY, transaction, {
      daysUntilExpire: 1
    });
  }

  public get(): Transaction {
    return this.transaction;
  }

  public remove() {
    delete this.transaction;
    this.storage.remove(TRANSACTION_STORAGE_KEY);
  }
}

const COOKIE_KEY = 'a0.spajs.txs.';
const getTransactionKey = (state: string) => `${COOKIE_KEY}${state}`;

interface Transactions {
  [key: string]: Transaction;
}
class CookieTransactionManager {
  private transactions: Transactions;
  constructor() {
    this.transactions = {};
    typeof window !== 'undefined' &&
      CookieStorage.getAllKeys()
        .filter(k => k.startsWith(COOKIE_KEY))
        .forEach(k => {
          const state = k.replace(COOKIE_KEY, '');
          this.transactions[state] = CookieStorage.get<Transaction>(k);
        });
  }
  public create(state: string, transaction: Transaction) {
    this.transactions[state] = transaction;
    CookieStorage.save(getTransactionKey(state), transaction, {
      daysUntilExpire: 1
    });
  }
  public get(state: string): Transaction {
    return this.transactions[state];
  }
  public remove(state: string) {
    delete this.transactions[state];
    CookieStorage.remove(getTransactionKey(state));
  }
}

export default class TransactionManager {
  private sessionManager: SessionStorageTransactionManager;
  private cookieManager: CookieTransactionManager;
  constructor(storage: ClientStorage) {
    this.sessionManager = new SessionStorageTransactionManager(storage);
    this.cookieManager = new CookieTransactionManager();
  }

  public create(state: string, transaction: Transaction) {
    this.sessionManager.create(transaction);
    this.cookieManager.create(state, transaction);
  }

  public get(state: string): Transaction {
    return this.sessionManager.get() ?? this.cookieManager.get(state);
  }

  public remove(state: string) {
    this.sessionManager.remove();
    this.cookieManager.remove(state);
  }
}
