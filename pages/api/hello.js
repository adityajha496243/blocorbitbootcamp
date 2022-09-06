// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "../../model/connect";
import user from "../../model/user";
export default function handler(req, res) {
  if (req.method == "POST") {
    connectMongo()
      .then(() => {
        user
          .create({
            firstName: "blocorbit",
          })
          .then(() => {
            res.status(200).json({ response: "data insert" });
          })
          .catch((error) => {
            res.status(301).json({ response: "fail insert data." });
          });
      })
      .catch((error) => {
        res.status(301).json({ response: "fail to connect database" });
      });
  } else {
    res.status(405).json({ response: "failed" });
  }
}
