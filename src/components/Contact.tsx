type ContactProps = {
  email: string;
};

function Contact({ email }: ContactProps) {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <form>
        <label>Name</label>
        <input type="text" />
        <br />
        <label>Email</label>
        <input type="email" />
        <br />
        <label>Message</label>
        <textarea />
        <br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;