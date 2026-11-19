# AI-Scalers

## Contact form email

The `/contact` form sends messages through the `/api/contact` endpoint. Configure SMTP by copying `.env.example` to `.env.local` and filling in the credentials from your email provider. Restart the Next.js server after changing environment variables.

The recipient address is configured in `util/contact.ts`. SMTP credentials belong only in `.env.local`; never commit them.
