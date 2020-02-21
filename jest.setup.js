const ActionHero = require('actionhero');
let actionhero = new ActionHero.Process();

beforeAll(async () => {
  await actionhero.start();
});

afterAll(async () => {
  await actionhero.stop();
  actionhero = null;
});