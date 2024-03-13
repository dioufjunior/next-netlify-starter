import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Terms and Conditions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Terms and Conditions" />
        <p className="description">Welcome to the AiiO (AI Input Output) application. Your privacy is paramount to us. Below, you will find detailed
        information regarding our privacy policy.</p>

    <h2>Utilization of the AiiO Platform</h2>
    <p className="description">The application relies on the powerful openAi ChatGPT platform to provide its services. When you use our app, it
        may be necessary for OpenAI ChatGPT to collect usage data, such as user inputs and generated responses. We
        invite you to consult OpenAI ChatGPT's privacy policy for more details on how your data is handled.</p>

    <h2>Authentication</h2>
    <p className="description">User authentication is entirely managed by OpenAI ChatGPT. We do not collect any information regarding user
        authentication.</p>

    <h2>Interaction Recording</h2>
    <p className="description">We want to assure you that we do not record any user interactions. We respect your privacy and do not track your
        activities within the application.</p>

    <h2>Beta Version</h2>
    <p className="description">Please note that the application is currently in beta phase. Therefore, we cannot guarantee flawless operation of
        the app under all circumstances. Users agree to use the application at their own risk, and we do not accept
        responsibility for any malfunctions or issues arising from the use of the application.</p>

    <h2>Exclusive Use</h2>
    <p className="description">Usage of our application is reserved exclusively for those who accept and adhere to OpenAI ChatGPT's privacy
        policy. Users are required to review these guidelines before using the application.</p>

    <h2>Changes to the Privacy Policy</h2>
    <p className="description">We reserve the right to make changes to this privacy policy at any time. Any changes will be communicated within
        the application and will take immediate effect. We encourage you to regularly review this policy to stay
        informed about our privacy practices.</p>

    <p className="description">If you have any questions, comments, or concerns regarding our privacy policy, please do not hesitate to contact
        us.</p>
    <p className="description">Last Updated: 03/08/2024.</p>
      </main>

      <Footer />
    </div>
  )
}
