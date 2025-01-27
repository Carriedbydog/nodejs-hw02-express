const { updateService } = require("../../services");

const updateContact = async (req, res) => {
  const result = await updateService(req);

  res.status(200).json(result);
};

module.exports = updateContact;
