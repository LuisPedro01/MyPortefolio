import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

/**
 * Email automático de agradecimento para o utilizador
 */
export const ThankYouEmail = ({ userName }) => {
  const previewText = `Thank you for contacting us, ${userName}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Img
              src={`https://myportefolio1.netlify.app/static/media/Logo6.dd73d0c83a40b6a3b5b5.png`}
              width="150"
              height="30"
              alt="Company Logo"
            />
          </Section>
          <Section>
            <Text style={heading}>Thank You, {userName}!</Text>
            <Text style={paragraph}>
              We have received your message and our team will get back to you as
              soon as possible.
            </Text>
            <Text style={paragraph}>
              In the meantime, you can check our{" "}
              <Link
                href="https://yourcompany.com/support"
                style={link}
              >
                Support Center
              </Link>{" "}
              for answers to common questions.
            </Text>
            <Button
              style={button}
              href="https://yourcompany.com/support"
            >
              Visit Support Center
            </Button>
          </Section>
          <Section>
            <Text style={footer}>
              If you have any further questions, feel free to reply to this
              email.
            </Text>
            <Text style={footer}>
              Best regards,
              <br />
              Luís Rodrigues
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

/**
 * Email interno para TI (quando alguém envia uma mensagem pelo formulário)
 */
export const AdminNotificationEmail = ({
  name,
  email,
  message,
}) => {
  const previewText = `New contact message from ${name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={heading}>New Message Received 📩</Text>
            <Text style={paragraph}>
              <strong>From:</strong> {name} ({email})
            </Text>
            <Text style={paragraph}>
              <strong>Message:</strong>
              <br />
              {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ThankYouEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const heading = {
  fontSize: "28px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
  marginBottom: "20px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.4",
  color: "#484848",
  marginBottom: "16px",
};

const button = {
  backgroundColor: "#4CAF50",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  padding: "12px 20px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "100%",
  marginTop: "24px",
};

const link = {
  color: "#4CAF50",
  textDecoration: "underline",
};

const footer = {
  fontSize: "14px",
  color: "#9ca299",
  marginTop: "24px",
};
