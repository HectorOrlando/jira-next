import { FC, PropsWithChildren, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '@/interfaces';

import { EntriesContext, entriesReducer } from './';


export interface EntriesState {
    entries: Entry[];
}


const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pending - Consequat ea proident voluptate irure.',
            status: 'pending',
            createAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'In-progress - Officia officia esse velit exercitation.',
            status: 'in-progress',
            createAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Finished - Minim cupidatat irure sit esse et pariatur laboris non in dolore fugiat.',
            status: 'finished',
            createAt: Date.now() -100000,
        }
    ],
}


export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>
    )
};