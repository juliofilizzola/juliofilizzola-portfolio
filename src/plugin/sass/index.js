module.exports = {
  onPreBuild: async ({ utils: { run } }) => {
    await run.command(
      "node-sass src/pages/contacts.scss src/pages/contacts.css "
    );
  },
};