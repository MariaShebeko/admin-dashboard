import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findById(id);

    if (!result) {
      const error = new Error(`User with id-${id} not found`);
      error.status = 404;
      throw error;
    }

    // res.json({
    //   status: "success",
    //   code: 200,
    //   data: {
    //     result: result,
    //   },
    // });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
