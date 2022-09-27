import { persistActions } from 'app/state/persist'
import { selectHasPersistedProfiles } from 'app/state/persist/selectors'
import { Box, Button } from 'grommet'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function Lock() {
  const dispatch = useDispatch()
  const hasPersistedProfiles = useSelector(selectHasPersistedProfiles)

  if (!hasPersistedProfiles) {
    return <></>
  }

  return (
    <Box direction="row" gap="small">
      <Button label="Lock profile" onClick={() => dispatch(persistActions.lockAsync())}></Button>

      <Button label="Erase profile" onClick={() => dispatch(persistActions.eraseAsync())}></Button>
    </Box>
  )
}
