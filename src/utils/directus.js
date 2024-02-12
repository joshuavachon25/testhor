import { createDirectus, rest, staticToken } from "@directus/sdk";

export const getDirectusClient = async () => {
  const client = createDirectus(import.meta.env.PUBLIC_DIRECTUS_URL)
    .with(staticToken(import.meta.env.DIRECTUS_TOKEN))
    .with(rest())

  return client;
};

//https://docs.directus.io/guides/sdk/getting-started.html