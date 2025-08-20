const User = require('../models/user');


exports.getProfile = async (req, res) => {
try {
    let params = req.params.id
    console.log(req)
const user = await User.findOne({_id:params});
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