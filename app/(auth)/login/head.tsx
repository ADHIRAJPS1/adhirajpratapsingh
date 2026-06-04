const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "";
const clientIdValue = googleClientId.endsWith(".apps.googleusercontent.com")
  ? googleClientId
  : `${googleClientId}.apps.googleusercontent.com`;

export default function Head() {
  return (
    <>
      <meta name="google-signin-client_id" content={clientIdValue} />
      <meta name="google-signin-scope" content="profile email" />
    </>
  );
}
