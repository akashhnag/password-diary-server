import app from '../server';
import dbConnection from './dbSetup';

const PORT = process.env.PORT || 3000;

const init = async () => {
  await dbConnection();
  app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}..`);
  });
};

export default init;
