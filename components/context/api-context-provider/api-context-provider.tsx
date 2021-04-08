import React, { ReactNode } from 'react';
import { RequestProvider, useResource, Resource } from 'react-request-hook';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

export type ApiContextProviderProps = {
    children?: ReactNode,
    apiInstance: AxiosInstance
}

export const useContextProvider = useResource;
export interface ContextResource<TPayload> extends Resource<TPayload>{};

export const ApiContextProvider = ({ children, apiInstance }: ApiContextProviderProps) => {
    return <RequestProvider value={apiInstance}>{children}</RequestProvider>
}