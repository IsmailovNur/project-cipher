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
import axios from 'axios';
import { BASE_URL } from "./shared/axios/AxiosApi.ts";

const App = () => {

  const [decoded, setDecoded] = useState('');
  const [encoded, setEncoded] = useState('');
  const [password, setPassword] = useState('');


  const handleEncode = async () => {
    if (!password.trim()) {
      alert("empty");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}encode`, {
        password: password,
        message: decoded,
      });
      setEncoded(response.data.encoded);
      setDecoded('');
    } catch (e) {
      console.log(e)
    }
  };

  const handleDecode = async () => {
    if (!password.trim()) {
      alert("empty");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}decode`, {
        password: password,
        message: encoded,
      });
      setDecoded(response.data.decoded);
      setEncoded('');
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div className="App">
      <Typography
        sx={{textAlign: 'center', color: 'text.primary', mt: 4}}
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
            <IconButton
              onClick={handleEncode}
              color="primary"
              size="large">
              <ArrowDownwardIcon />
            </IconButton>

            <IconButton
              onClick={handleDecode}
              color="primary"
              size="large">
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
