const get = ((req, res, next) => {
  res.sendFile(__dirname + '/loaderio-d24661adb6c698a92c6accc4aa81af60.txt');
});

module.exports = { get };