const db = require('../config/connection');
const { User, Filament, Downloadables } = require('../models');

// In some class activities the seed.js file is inside the config folder.
// The original one I deleted by mistake was in the seeds folder, so...

const userSeeds = require('./userSeeds');
const filamentSeeds = require('./filamentSeeds');
const DownloadablesSeeds = require('./DownloadablesSeeds');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    console.log('Users seeded!');

    await Filament.deleteMany({});
    await Filament.create(filamentSeeds);
    console.log('Filaments seeded!');

    await Downloadables.deleteMany({});
    await Downloadables.create(DownloadablesSeeds);

    process.exit(0);
  } catch (err) {
    throw err;
  }
});
