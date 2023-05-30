// import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
// import axios from 'axios'
// import { localStorageKeys } from 'store/localStorage/keys'
// import { localStorageClient } from 'store/localStorage/localStorageClient'

// export abstract class HttpClient {
//   protected readonly instance: AxiosInstance

//   public constructor(baseURL: string) {
//     this.instance = axios.create({
//       baseURL
//     })

//     this.initializeRequestInterceptor()

//     this.initializeResponseInterceptor()
//   }

//   private initializeRequestInterceptor = () => {
//     this.instance.interceptors.request.use(this.handleRequest, this.handleError)
//   }

//   private initializeResponseInterceptor = () => {
//     this.instance.interceptors.response.use(
//       this.handleResponse,
//       this.handleError
//     )
//   }

//   private handleRequest = (res: AxiosRequestConfig) => {
//     const accessToken = localStorageClient.getItem(
//       localStorageKeys['@access_token']
//     )

//     if (accessToken) {
//       res.headers?.Authorization = accessToken
//     }

//     return res
//   }

//   private handleResponse = (res: AxiosResponse) => res

//   protected handleError = async (error: AxiosError) => {
//     await errorHandler(error)

//     return Promise.reject(error)
//   }
// }
