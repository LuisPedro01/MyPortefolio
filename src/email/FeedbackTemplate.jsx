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
  import Logo from "../assets/Logo6.png";
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  const ThankYouEmail = ({ userName, supportLink }) => {
    const previewText = `Thank you for contacting us, ${userName}!`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        
        <Body style={main}>
          <Container style={container}>
            <Section>
              <Img
                src={Logo}
                width="96"
                height="30"
                alt="Company Logo"
              />
            </Section>
            <Section>
              <Text style={heading}>Thank You, {userName}!</Text>
              <Text style={paragraph}>
                We have received your message and our team will get back to you as soon as possible. 
              </Text>
              <Text style={paragraph}>
                In the meantime, you can check our <Link href={supportLink} style={link}>Support Center</Link> for answers to common questions.
              </Text>
              <Button style={button} href={supportLink}>
                Visit Support Center
              </Button>
            </Section>
            
            <Section>
              <Text style={footer}>
                If you have any further questions, feel free to reply to this email.
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
  
  ThankYouEmail.PreviewProps = {
    userName: "Customer",
    supportLink: "https://yourcompany.com/support",
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
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
    marginBottom: "24px",
  };
  
  const paragraph = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
    marginBottom: "16px",
  };
  
  const button = {
    backgroundColor: "#4CAF50",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "18px",
    padding: "12px 24px",
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
  