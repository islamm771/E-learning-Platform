import Hero2 from "../components/Hero2"
import Button from "../components/ui/Button"

const ContactPage = () => {
  return (
    <>
      <Hero2>
        <h2 className="text-4xl font-bold">
          Contact Us
        </h2>
        <p className="text-gray-600">
          Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs:
          Free and Pro. We believe in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a business seeking professional
          development solutions, we have a plan that suits you. Explore our pricing options below
          and choose the one that best fits your requirements.
        </p>
      </Hero2>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-20">
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-6 lg:p-10 rounded-md">
          <div className="flex flex-col">
            <label htmlFor="f-name" className="font-semibold mb-2">First Name</label>
            <input type="text" id="f-name" className="bg-gray-50 border border-gray-200 p-3 rounded-md outline-0 focus:border-orange-400" placeholder="Enter your first name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="l-name" className="font-semibold mb-2">Last Name</label>
            <input type="text" id="l-name" className="bg-gray-50 border border-gray-200 p-3 rounded-md outline-0 focus:border-orange-400" placeholder="Enter your last name" />
          </div>
          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="subject" className="font-semibold mb-2">Subject</label>
            <input type="text" id="subject" className="bg-gray-50 border border-gray-200 p-3 rounded-md outline-0 focus:border-orange-400" placeholder="Enter your subject" />
          </div>
          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="message" className="font-semibold mb-2">Message</label>
            <textarea rows={5} id="message" className="bg-gray-50 border border-gray-200 p-3 rounded-md resize-none outline-0 focus:border-orange-400" placeholder="Enter your message" />
          </div>
          <div className="md:col-span-2">
            <Button className="block w-fit mx-auto text-center capitalize">send your message</Button>
          </div>



        </div>

      </div>
    </>
  )
}

export default ContactPage