import { stat } from "fs";

const register = async (req: any, res: any) => {
  const body = req.body;
  try {
    console.log(body);
    res.status(200).json({
      message: "User created successfully ,register",
      data: body,
      status :200,
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};
export { register };