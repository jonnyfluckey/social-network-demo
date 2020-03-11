const admin = require("firebase-admin");
let serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.handler = async function(event, context) {
  const jsonObj = JSON.parse(event.body);
  const post = jsonObj.post;
  const user = jsonObj.user;
  const db = admin.firestore();

  db.collection("posts")
    .add({
      user,
      post
    })
    .then(res => {
      console.log(res);
    });

  return (
    null,
    {
      statusCode: 200,
      body: "Post Created Successfully"
    }
  );
};
