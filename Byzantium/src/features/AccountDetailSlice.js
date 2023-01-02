import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    address: '',
    status: false
};

export const accountDetailSlice = createSlice({
    name: 'accountDetail',
    initialState,
    reducers: {
        accountAdded: {
            reducer(state, action) {
                state.address = action.payload.userAddress;
                state.status = action.payload.connectionStatus;
            },
            prepare(userAddress, connectionStatus) {
                return {
                    payload: {
                        userAddress,
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