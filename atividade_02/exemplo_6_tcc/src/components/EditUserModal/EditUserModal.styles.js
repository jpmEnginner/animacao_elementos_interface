import styled from 'styled-components';

/* overlay */
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  z-index: 1000;
  display: ${({open}) => (open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

/* container */
export const Container = styled.div`
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.3);
  width: 90%;
  max-width: 50rem;
  max-height: 90vh;
  overflow-y: auto;
  animation: scale .25s ease;

  @keyframes scale {
    from { transform: translateY(-2rem) scale(.95); opacity:0; }
    to   { transform: none; opacity:1; }
  }
`;

/* header */
export const Header = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:2rem 3rem;
  border-bottom:.1rem solid #e9ecef;
  background:#f8f9fa;
  border-radius:1.2rem 1.2rem 0 0;
`;

export const Title  = styled.h2`
  margin:0;font-size:2.2rem;font-weight:700;color:#212529;
`;

export const Close  = styled.button`
  border:none;background:none;font-size:3rem;color:#6c757d;cursor:pointer;
  line-height:1;
`;

/* conteúdo */
export const Content = styled.form`
  padding:3rem;
  display:flex;
  flex-direction:column;
  gap:2.5rem;
`;

/* grupo */
export const FieldGroup = styled.div`
  display:flex;
  flex-direction:column;
  gap:.8rem;
`;

export const Label = styled.label`
  font-size:1.4rem;font-weight:600;color:#495057;
`;

const commonInput = `
  width:100%;
  padding:1.2rem 1.5rem;
  border:.2rem solid #e9ecef;
  border-radius:.8rem;
  font-size:1.5rem;
  background:#fff;
  transition:all .3s ease;
  &:focus{
    outline:none;border-color:#007bff;
    box-shadow:0 0 0 .3rem rgba(0,123,255,.25);
  }
`;
export const Input  = styled.input`${commonInput}`;
export const Select = styled.select`${commonInput}`;

/* footer */
export const Footer = styled.div`
  display:flex;
  gap:1.5rem;
  justify-content:flex-end;
  padding:2rem 3rem;
  border-top:.1rem solid #e9ecef;
  background:#f8f9fa;
  border-radius:0 0 1.2rem 1.2rem;
`;

const Btn = styled.button`
  padding:1.3rem 2.8rem;
  font-size:1.4rem;
  font-weight:600;
  border-radius:.8rem;
  border:none;
  cursor:pointer;
  transition:all .3s ease;
  min-width:14rem;
  color:#fff;
`;

export const CancelBtn = styled(Btn)`
  background:#6c757d;
  &:hover{background:#545b62}
`;

export const SaveBtn = styled(Btn)`
  background:#28a745;
  &:hover{background:#1e7e34}
  &:disabled{background:#94d3a2;cursor:not-allowed;}
`;