(async () => {
  const app = (await import('./config/app')).default;
  app.listen(process.env.PORT, () => {
    console.log(
      `Service of compasso interview running at http://localhost:${process.env.PORT}`,
    );
  });
})();
