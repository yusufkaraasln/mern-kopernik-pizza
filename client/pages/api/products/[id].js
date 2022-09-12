import dbConnect from "../../../util/db";
import Product from "../../../models/Product";
export default async function (req, res) {
  const {
    method,
    query: { id },
  } = req;
  dbConnect();

  if (method === "GET") {
    const product = await Product.findOne({ _id: id });
    res.status(200).json(product);
  }

  if (method === "DELETE") {

    try {
      await Product.findOneAndDelete({ _id: id });
      res.status(200).json("Ürün Silindi");
    } catch (e) {
      res.status(500).json(e);
    }
  }

  if (method === "PUT") {
  }
}
