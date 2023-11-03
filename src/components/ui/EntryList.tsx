import { List, Paper } from "@mui/material"
import { EntryCard } from "."


export const EntryList = () => {
    return (
        // Todo: aquí haremos drop.
        <div>
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: 2 }}>
                {/* Todo: cambiará dependiendo si estoy haciendo drag o no. */}
                <List sx={{ opacity: 1 }}>
                    <EntryCard />
                    <EntryCard />
                    <EntryCard />
                    <EntryCard />
                </List>
            </Paper>
        </div>
    )
}
