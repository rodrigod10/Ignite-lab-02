import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4od4zt01xy301xx8sds7gne/master',
  cache: new InMemoryCache()
})