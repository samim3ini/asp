import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useState } from 'react';

// Placeholder components for the pages
const EmployeeManagement = () => <div>Employee Management Page</div>;
const AttendanceManagement = () => <div>Attendance Management Page</div>;
const AttendanceAnalytics = () => <div>Attendance Analytics Page</div>;

function App() {
  const { signOut } = useAuthenticator();
  const [currentPage, setCurrentPage] = useState('employee'); // State to track the current page

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      signOut();
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'employee':
        return <EmployeeManagement />;
      case 'attendance':
        return <AttendanceManagement />;
      case 'analytics':
        return <AttendanceAnalytics />;
      default:
        return <EmployeeManagement />;
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 2 }}>
              Attendance System Admin Portal
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  padding: 1,
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: 2,
                  backgroundColor: 'primary.light',
                }}
              >
                <Button color="inherit" onClick={() => setCurrentPage('employee')}>
                  Employee Management
                </Button>
              </Box>
              <Box
                sx={{
                  padding: 1,
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: 2,
                  backgroundColor: 'primary.light',
                }}
              >
                <Button color="inherit" onClick={() => setCurrentPage('attendance')}>
                  Attendance Management
                </Button>
              </Box>
              <Box
                sx={{
                  padding: 1,
                  border: '1px solid',
                  borderColor: 'primary.main',
                  borderRadius: 2,
                  backgroundColor: 'primary.light',
                }}
              >
                <Button color="inherit" onClick={() => setCurrentPage('analytics')}>
                  Attendance Analytics
                </Button>
              </Box>
              <Box
                sx={{
                  padding: 1,
                  border: '1px solid',
                  borderColor: 'secondary.main',
                  borderRadius: 2,
                  backgroundColor: 'secondary.light',
                  marginLeft: 'auto',
                }}
              >
                <Button color="inherit" onClick={handleLogout} sx={{ color: 'white' }}>
                  Logout
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ marginTop: 4 }}>{renderPage()}</Container>
    </>
  );
}

export default App;