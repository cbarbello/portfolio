import React from "react";

interface EmailTemplateProps {
  message: string;
}

const EmailTemplate = ({ message }: EmailTemplateProps) => (
  <div>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
