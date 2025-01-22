// Create web server
// http://localhost:3000/comments
router.get('/comments', (req, res) => {
  res.send('Comments');
});