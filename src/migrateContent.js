import { client } from "./client.js";

client
  .fetch(`*[_type == "quotes"]`)
  .then((docs) => {
    docs.forEach((doc) => {
      // Create a new document with the new type
      const newDoc = {
        _id: doc._id + "-migrated", // or use a new ID: `sanityClient.createIfNotExists`
        _type: "qualityServices",
        title: doc.title,
        description: doc.description,
        // Add other fields as necessary
      };

      client
        .create(newDoc)
        .then((createdDoc) => {
          console.log("Document created:", createdDoc);

          // Delete the old document
          client
            .delete(doc._id)
            .then(() => {
              console.log("Old document deleted:", doc._id);
            })
            .catch((err) => {
              console.error("Delete failed: ", err.message);
            });
        })
        .catch((err) => {
          console.error("Create failed: ", err.message);
        });
    });
  })
  .catch((err) => {
    console.error("Fetch failed: ", err.message);
  });
