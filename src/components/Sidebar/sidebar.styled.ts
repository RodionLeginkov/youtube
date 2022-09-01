import styled from 'styled-components';

export const SidebarButton = styled.div`
  font-weight: bold;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor:pointer;
  background: transparent;
  outline: none;
  border: none;

  padding: 7px 15px;
  margin: 10px 0px;
  border-radius: 20px;
  transition: all 0.3s ease;

  :hover {
    background-color: #FC1503 !important;
    color: white !important;

    span{
      color: white !important;
    }
  }
`;

export const SidebarIcon = styled.span`
  color: red;
  margin-right: 1.5rem;
  ${({ active }) => active && `
      color: white;
  `}
`;

export const SidebarTitle = styled.span`
  font-size: 1.6rem;
  opacity: ${({ active }) => active ? 1 : 0.8};
`;
