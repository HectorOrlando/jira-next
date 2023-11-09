import { ChangeEvent, useState, useContext } from 'react';

import { Box, Button, IconButton, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';



export const NewEntry = () => {

    const { addNewEntry } = useContext(EntriesContext)
    const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)

    const [inputValue, setInputValue] = useState('');
    const [touch, setTouch] = useState(false);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {
        if (inputValue.length === 0) return;
        addNewEntry(inputValue);
        setIsAddingEntry(false);
        setTouch(false);
        setInputValue('');
    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
            {
                isAddingEntry ?
                    (<>
                        <TextField
                            fullWidth
                            placeholder='Nueva Entrada'
                            autoFocus
                            multiline
                            sx={{ paddingBottom: '2%' }}
                            label='Nueva Entrada'
                            helperText={inputValue.length <= 0 && touch && 'Ingrese un valor'}
                            error={inputValue.length <= 0 && touch}
                            value={inputValue}
                            onChange={onTextFieldChanged}
                            onBlur={() => setTouch(true)}
                        />
                        <Box
                            display='flex'
                            justifyContent='space-between'
                        >
                            <Button
                                variant='outlined'
                                endIcon={<SaveIcon />}
                                onClick={() => setIsAddingEntry(false)}
                            >
                                Cancelar
                            </Button>
                            <Button
                                variant='outlined'
                                color='secondary'
                                endIcon={<SaveIcon />}
                                onClick={onSave}
                            >
                                Guardar
                            </Button>
                        </Box>
                    </>)
                    :
                    (<Button
                        variant='outlined'
                        endIcon={<AddCircleIcon />}
                        onClick={() => setIsAddingEntry(true)}
                    >
                        Agregar Tarea
                    </Button>)
            }
        </Box>
    )
}
