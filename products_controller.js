module.exports = {
  create: (req, res, next) => {
    const db = req.app.get('db');
    const { name, description, price, image_url } = req.body; //deconstruction here

    db.create_product(name, description, price, image_url)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  getOne: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.read_product(name, description, price, image_url)
      .then((product) => res.status(200).send(product))
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  getAll: (req, res, next) => {
    const db = req.app.get("db");

    db.read_products(name, description, price, image_url)
      .then((products) => res.status(200).send(products))
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  update: (req, res, next) => {
    const db = req.app.get("db");
    const { params, query } = req;

    db.update_product([params.id, query.desc])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  delete: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.delete_product()
      .then(() => sendStatus(200))
      .catch((err) => {
        res.status(500).send(err);
      });
  },
};
