
import { createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface EmailState {
  emailAdress: string;
}

const initialState: EmailState = {
  emailAdress: "initial@mail.de",
};
export const emailSlice = createSlice({
  name:'email',
  initialState,
  reducers: {
    changeEmail: (state, action: PayloadAction<string>)=>{
      state.emailAdress= action.payload;
      return state
    }
  }
})

export const {changeEmail} = emailSlice.actions;
export default emailSlice.reducer;

