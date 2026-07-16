import { type ChangeEvent, useState } from "react";
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
import Spinner from "./shared/Spinner/Spinner.tsx";

const App = () => {

  const [decoded, setDecoded] = useState('');
  const [encoded, setEncoded] = useState('');
  const [password, setPassword] = useState('');

  const isPasswordEmpty = !password.trim();
  const isDecodedEmpty = !decoded.trim();
  const isEncodedEmpty = !encoded.trim();

  const [isLoading, setIsLoading] = useState(false);

  const handleEncode = async () => {
    if (isPasswordEmpty || isDecodedEmpty) return;
    setIsLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}encode`, {
        password: password,
        message: decoded,
      });
      setEncoded(response.data.encoded);
      setDecoded('');
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDecode = async () => {
    if (isPasswordEmpty || isEncodedEmpty) return;
    setIsLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}decode`, {
        password: password,
        message: encoded,
      });
      setDecoded(response.data.decoded);
      setEncoded('');
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const onlyLatin = value.replace(/[^a-zA-Z]/g, '');
    setPassword(onlyLatin);
  };

  const handleDecodedChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const onlyLatin = value.replace(/[^a-zA-Z]/g, '');
    setDecoded(onlyLatin);
  };

  const handleEncodedChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const onlyLatin = value.replace(/[^a-zA-Z]/g, '');
    setEncoded(onlyLatin);
  };

  return (
    <div className="App">
      <Typography
        sx={{textAlign: 'center', color: 'text.primary', mt: 4}}
        variant="h2"
      >Message Viginer Chiper
      </Typography>

      <Container maxWidth="sm" style={{marginTop: '50px'}}>
        <Stack>
          {isLoading && <Spinner />}
          <TextField
            sx={{mb: 3}}
            label="Decoded message (Latin)"
            multiline
            rows={4}
            type="text"
            fullWidth
            value={decoded}
            onChange={handleDecodedChange}
          />

          <Card sx={{display: 'flex', alignItems: 'center', gap: 2, mb: 3}}>
            <TextField
              placeholder="Password (Latin)"
              type="text"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
            />
            <IconButton
              onClick={handleEncode}
              color="primary"
              size="large"
              disabled={isPasswordEmpty || isDecodedEmpty}
            >
              <ArrowDownwardIcon />
            </IconButton>

            <IconButton
              onClick={handleDecode}
              color="primary"
              size="large"
              disabled={isPasswordEmpty || isEncodedEmpty}
            >
              <ArrowUpwardIcon />
            </IconButton>
          </Card>

          <TextField
            label="Encoded message (Latin)"
            multiline
            rows={4}
            fullWidth
            value={encoded}
            onChange={handleEncodedChange}
          />

        </Stack>
      </Container>
    </div>
  )
}

export default App;
