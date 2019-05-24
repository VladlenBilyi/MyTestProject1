import { InferValueTypes } from '../../utils/types';

import * as actionsCreators from './actions';

export type ActionTypes = ReturnType<InferValueTypes<typeof actionsCreators>>;
