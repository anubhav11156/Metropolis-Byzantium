import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    address: '',
    unsDomain: '',
    status: false
};

export const accountDetailSlice = createSlice({
    name: 'accountDetail',
    initialState,
    reducers: {
        accountAdded: {
            reducer(state, action) {
                state.address = action.payload.userAddress;
                state.unsDomain = action.payload.userDomain;
                state.status = action.payload.connectionStatus;
            },
            prepare(userAddress, userDomain, connectionStatus) {
                return {
                    payload: {
                        userAddress,
                        userDomain,
                        connectionStatus
                    }
                }
            }
        }
    }
})

export const selectAccount = (state) => state.accountDetail;
export const { accountAdded } = accountDetailSlice.actions;
export default accountDetailSlice.reducer;