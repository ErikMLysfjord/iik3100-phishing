interface EmailTemplateProps {
  email: string;
  password: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  password,
}) => (
  <div>
    <h1>Someone fell for the phishing attack!</h1>
    <p>
      The user that fell for the phishing attack has the following credentials:
    </p>
    <p>Email: {email}</p>
    <p>Password: {password}</p>
  </div>
);

export default EmailTemplate;
