import contacts from './data'
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Get in Touch</h2>
      <p>
        Entre em contato por qualquer um desses links!
      </p>
      <div className="container contact__container">
        {
          contacts.map(contact => 
            <a key={contact.id} href={contact.link} target="_blank" rel='noopner noreferrer'>
              {contact.icon}
            </a>)
        }
      </div>
    </section>
  )
}

export default Contact