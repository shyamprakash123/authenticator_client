// Mock authentication logic
export default function handler(req, res) {
    const { username, password } = req.body;
    if (username === 'mahendarchikkolla@gmail.com' && password === 'mahi1234') {
        const requiresTwoFactorAuth = true; // Check if user requires 2FA
        if (requiresTwoFactorAuth) {
            res.status(200).json({ success: true, require2FA: true }); // Indicate that 2FA is required
        } else {
            res.status(200).json({ success: true, redirect: '/dashboard' }); // Redirect to /dashboard upon successful login
        }
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
}
