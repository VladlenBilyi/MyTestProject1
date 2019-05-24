import { InferValueTypes } from '../../utils/types';

import * as actions from './actions';

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;
