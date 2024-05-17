export default function handler(req, res) {
  const { code } = req.body;
  if (code.length === 6) {
    res
      .status(200)
      .json({
        success: true,
        message: "Two-factor authentication successful",
        redirect: "/dashboard",
      });
  } else {
    res
      .status(401)
      .json({
        success: false,
        message: "Invalid two-factor authentication code",
      });
  }
}
