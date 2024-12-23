import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client =  sanityClient({
    projectId: 'lw0uyf2k',
    dataset: 'production',
    apiVersion: '2022-03-10', // use current UTC date - see "specifying API version"!
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
  });

  const builder = imageUrlBuilder(client); 

  export const urlFor = (source) => builder.image(source)
