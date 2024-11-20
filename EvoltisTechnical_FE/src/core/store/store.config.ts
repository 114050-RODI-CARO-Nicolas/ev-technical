import { provideStore } from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import { programmerReducer } from "./reducers/programmer.reducer";
import { ProgrammerEffects } from "./effects/programmer.effects";
import { provideEffects } from "@ngrx/effects";

export const appStoreConfig = [
    provideStore({
        programmer: programmerReducer
    }),
    provideEffects([ProgrammerEffects]),
    provideStoreDevtools({
        maxAge: 25,
        logOnly: false,
        trace: true
    })
    
]