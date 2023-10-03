export const runApp = (): string => 'Testing';

// if running a server with Jest testing:

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
