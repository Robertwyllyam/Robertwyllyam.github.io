import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";

export const Card = ({
  src,
  text,
  title,
}: {
  src: string;
  text: string;
  title: string;
}) => {
  return (
    <CCard className="card">
      <CCardImage src={src} />
      <CCardBody>
        <CCardTitle >{title}</CCardTitle>
        <CCardText>{text}</CCardText>
      </CCardBody>
    </CCard>
  );
};
