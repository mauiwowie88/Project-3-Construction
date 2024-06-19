import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "qjhueo9m", // Ensure this is your actual project ID
  dataset: "production",
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2023-06-13", // Use the current date or a specific date
});

const fetchData = async (query, setData) => {
  try {
    const data = await client.fetch(query);
    setData(data);
  } catch (error) {
    console.error(error);
  }
};

export { client, fetchData };
