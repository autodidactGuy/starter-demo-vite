import React from 'react'
import Box from '@useweb/ui/Box'
import { SnackbarProvider } from '@useweb/ui/Snackbar'

export default function ShellLayout({ children }) {
  return (
    <>
      <SnackbarProvider>
        <Box
          component='main'
          sx={{
            p: 2,
          }}
        >
          {children}
        </Box>
      </SnackbarProvider>
    </>
  )
}
