const Room = require('../../models/Room');
const to = require('await-to-js').default;

module.exports = async (req, res) => {
  const [e, room] = await to(Room.findOne({
    name: req.params.room
  }).exec());
  if (e) return res.status(400).json({error: e});
  if (!room) return res.json({active: false});
  return res.json({active: room.active});
};
