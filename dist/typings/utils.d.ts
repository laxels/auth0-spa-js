import {
  AuthenticationResult,
  PopupConfigOptions,
  TokenEndpointOptions
} from './global';
export declare const createAbortController: () => AbortController;
export declare const parseQueryResult: (
  queryString: string
) => AuthenticationResult;
export declare const runIframe: (
  authorizeUrl: string,
  eventOrigin: string,
  timeoutInSeconds?: number
) => Promise<AuthenticationResult>;
export declare const runPopup: (
  authorizeUrl: string,
  config: PopupConfigOptions
) => Promise<AuthenticationResult>;
export declare const getCrypto: () => Crypto;
export declare const getCryptoSubtle: () => any;
export declare const createRandomString: () => string;
export declare const encode: (value: string) => string;
export declare const decode: (value: string) => string;
export declare const createQueryParams: (params: any) => string;
export declare const sha256: (s: string) => Promise<any>;
export declare const urlDecodeB64: (input: string) => string;
export declare const bufferToBase64UrlEncoded: (
  input: number[] | Uint8Array
) => string;
export declare const fetchWithTimeout: (
  url: string,
  audience: string,
  scope: string,
  options: {
    [index: string]: any;
  },
  worker: Worker,
  timeout?: number
) => Promise<unknown>;
export declare const oauthToken: (
  { baseUrl, timeout, audience, scope, ...options }: TokenEndpointOptions,
  worker: Worker
) => Promise<any>;
export declare const validateCrypto: () => void;
