import { Paper } from '@mui/material';
import styled from 'styled-components';

export const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 35rem;
  padding-left: 10px;
  @media (max-width: 600px) {
    width: 15rem;
  }
`;

export const SearchPaper = styled(Paper)`
  border-radius: 2rem;
  border: 1px solid #e3e3e3;
  background-color: white;
  padding-left: 2px;
  box-shadow: none;
  margin-right: 5px;
`;
