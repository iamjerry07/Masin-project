const User = require('../models/user');


exports.getProfile = async (req, res) => {
try {
    let params = req.query.id
const user = await User.findOne({_id:"68a56782ed43373e367d84fb"});
if (!user) return res.status(404).json({ error: 'User not found' });
return res.status(200).send({status: true, data: user})
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Server error' });
}
};


exports.getAllUsers = async (req, res) => {
try {
const users = await User.find().sort({ createdAt: -1 });
return res.status(200).send({status: true,count:users.length, data: users});
} catch (err) {
console.error(err);
res.status(500).json({ error: 'Server error' });
}
};