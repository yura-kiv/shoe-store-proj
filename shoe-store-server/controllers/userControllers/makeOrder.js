const Order = require("../../models/orderModel");

makeOrder = async (req, res) => {
  try {
    const { cart, name, email, phone, address, description } = req.body;
    console.log(cart, name, email, phone, address, description);
    const order = new Order({
      cart,
      name,
      email,
      phone,
      address,
      description,
    });
    await order.save();
    res.json({ msg: "Order added! :3" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error." });
  }
};

module.exports = makeOrder;
