import authReducer from './auth.reducer';
import initialDatareducer from './initialData.reducer';
import slots from './slot.reducer'
import specialisation from './specialisation.reducer'
import price from './price.reducer'
import locations from './location.reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    initialData: initialDatareducer,
    slots: slots,
    specialisation: specialisation,
    price: price,
    locations: locations,
});

export default rootReducer;