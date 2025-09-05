import { Resend } from 'resend';
import ThankYouEmail from '../../email/FeedbackTemplate';

const resend = new Resend('re_hKg7xuUX_MojRshkxEHoKvVbn6BskvexS');

export async function POST () {
  try{
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'luisprodrigues01@gmail.com',
      subject: 'Thank You!',
      react: ThankYouEmail({ userName: 'teste' }),
    });
  } catch (e) {
    console.log('error on route.ts', e)
  }
     
}
 