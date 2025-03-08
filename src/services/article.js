import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Obtém a chave da API do ambiente
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// Define a API utilizando createApi
export const articleApi = createApi({
  reducerPath: 'articleApi', // Nome único para o slice do reducer
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/', // URL base da API
    prepareHeaders: (headers) => {
      // Configura os cabeçalhos necessários para a RapidAPI
      headers.set('X-RapidAPI-Key', rapidApiKey);
      headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
      
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Define o endpoint getSummary
    getSummary: builder.query({
      query: ({ articleUrl }) => ({
        url: `summarize?url=${encodeURIComponent(articleUrl)}&length=3`,
        method: 'GET',
      }),
    }),
  }),
});

// Exporta o hook gerado automaticamente para o endpoint getSummary
export const { useLazyGetSummaryQuery } = articleApi;
