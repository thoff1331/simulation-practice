module.exports = {
  create: (req, res, next) => {
    const db = req.app.get("db");
    const { name, price, image_url } = req.body;

    db.create_product([name, price, image_url])
      .then(() => res.status(200))
      .catch(err => console.log(err));
  },
  getAll: (req, res, next) => {
    const db = req.app.get("db");

    db.get_inventory()
      .then(products => res.status(200).json(products))
      .catch(err => console.log(err));
  },
  getOne: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    console.log(id);
    db.get_product(id)
      .then(product => res.status(200).json(product))
      .catch(err => console.log(err));
  },
  deleteOne: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_product(id)
      .then(() => res.status(200))
      .catch(err => console.log(err));
  }
};
