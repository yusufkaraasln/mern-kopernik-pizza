import dbConnect from "../../../util/db";
import Product from "../../../models/Product";
export default async function (req, res) {
  const { method } = req;
  dbConnect();

  if (method === "GET") {
        const product = await Product.find();
        res.status(200).json(product);

  }

  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
