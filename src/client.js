import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "qjhueo9m",
  dataset: "production",

  useCdn: false,
  apiVersion: "2023-06-13",
});

const fetchData = async (query, setData) => {
  try {
    const data = await client.fetch(query);
    setData(data);
  } catch (error) {
    console.error(error);
  }
};

const builder = imageUrlBuilder(client);

const urlFor = (source) => builder.image(source).url();

export { client, fetchData, urlFor };
