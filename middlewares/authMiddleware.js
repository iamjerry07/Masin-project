const jwt = require('jsonwebtoken');


const JWT_SECRET = "masin-project";


function authRequired(req, res, next) {
const token = req.headers.authorization?.split(' ')[1];

if (!token) return res.status(401).json({ error: 'Missing token' });
try {
req.user = jwt.verify(token, JWT_SECRET);
next();
} catch (err) {
res.status(401).json({ error: 'Invalid or expired token' });
}
}

function requireRole(...roles) {
return (req, res, next) => {
if (!roles.includes(req.user.role)) return res.status(403).json({ error: 'Only Admin can access' });
next();
};
}


module.exports = { authRequired, requireRole };