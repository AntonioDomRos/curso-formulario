// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Perfil } = initSchema(schema);

export {
  Perfil
};