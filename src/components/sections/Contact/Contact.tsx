import ContactsList from "./ContactsList"

function Contact() {
  return (
    <div className="bg-dark-600">
      <section className="max-w-screen-xl mx-auto p-8 md:px-0 text-white">
        <h1 className="text-center text-2xl mb-8 text-white font-bold">Contato</h1>
        <ContactsList />
      </section>
    </div>
  )
}

export default Contact