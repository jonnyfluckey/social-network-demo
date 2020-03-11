const admin = require("firebase-admin");
let serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.handler = async function(event, context) {
  const db = admin.firestore();
  const posts = [];

  await db
    .collection("posts")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        posts.push({
          id: doc.id,
          user: doc.data().user,
          post: doc.data().post
        });
      });
    })
    .catch(err => {
      console.log(err);
    });

  return (
    null,
    {
      statusCode: 200,
      body: JSON.stringify(posts)
    }
  );
};
