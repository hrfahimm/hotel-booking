import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITY_STUDIO_TOKEN,
    apiVersion: '2023-10-16',
}
const client = createClient(config)

export default client;



// import { createClient } from 'next-sanity';

// const sanityClient = createClient({
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//     useCdn: process.env.NODE_ENV === 'production',
//     token: process.env.SANITY_STUDIO_TOKEN,
//     apiVersion: '2023-10-16',
// });

// export default sanityClient;
