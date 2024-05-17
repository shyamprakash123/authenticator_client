export default function handler(req, res) {
  const { username, password } = req.body;
  if (username === "client@gmail.com" && password === "client") {
    const requiresTwoFactorAuth = true;
    if (requiresTwoFactorAuth) {
      res.status(200).json({ success: true, require2FA: true });
    } else {
      res.status(200).json({ success: true, redirect: "/dashboard" });
    }
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
}
