import './App.css';
import { useState } from "react";
import {
  Card,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const App = () => {

  const [decoded, setDecoded] = useState('');
  const [encoded, setEncoded] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="App">
      <Typography
        sx={{textAlign: 'center', color: 'text.secondary', mt: 4}}
        variant="h2"
      >Message Viginer Chiper
      </Typography>

      <Container maxWidth="sm" style={{marginTop: '50px'}}>
        <Stack spacing={3}>

          <TextField
            label="Decoded message"
            multiline
            rows={4}
            type="text"
            fullWidth
            value={decoded}
            onChange={(e) => setDecoded(e.target.value)}
          />

          <Card sx={{display: 'flex', alignItems: 'center', gap: 2}}>
            <TextField
              placeholder="Password"
              type="text"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <IconButton color="primary" size="large">
              <ArrowDownwardIcon />
            </IconButton>

            <IconButton color="primary" size="large">
              <ArrowUpwardIcon />
            </IconButton>
          </Card>

          <TextField
            label="Encoded message"
            multiline
            rows={4}
            fullWidth
            value={encoded}
            onChange={(e) => setEncoded(e.target.value)}
          />

        </Stack>
      </Container>
    </div>
  )
}

export default App;
