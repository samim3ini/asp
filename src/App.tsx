import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { useAuthenticator } from '@aws-amplify/ui-react'; // Import useAuthenticator

function App() {
  const { signOut } = useAuthenticator(); // Extract signOut from useAuthenticator

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      signOut(); // Call the signOut function
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Material-UI AppBar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 2 }}>
            Attendance System Admin Portal
          </Typography>
          {/* Logout Button Highlighted in a Box */}
          <Box
            sx={{
              padding: 1,
              border: '1px solid',
              borderColor: 'secondary.main',
              borderRadius: 2,
              backgroundColor: 'secondary.light',
              marginLeft: 'auto', // Push to the right
            }}
          >
            <Button
              color="inherit"
              onClick={handleLogout}
              sx={{ color: 'white' }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Main Content Area */}
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h5" align="center">
          Welcome to the Attendance System Admin Portal
        </Typography>
      </Container>
    </Box>
  );
}

export default App;