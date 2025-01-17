import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Contact } from '../components/ContactUs/contactcard'
import Map from '../components/Map'

export const ContactUs = () => {
  return (
    <><div className='grid grid-cols-3 gap-3'>
          <div className="space-y-6 py-8  ml-5 justify-items-center">
              <div>
                  <h2 className="text-2xl font-bold mb-2">Mission</h2>
                  <h2 className="text-2xl font-bold">Vision</h2>
              </div>

              <div className='space-y-1'>
                  <h3 className="text-gray-600 mb-2">Need Help?</h3>
                  <p className="mb-1 font-bold">info@urbandrive.co.ke</p>
                  <p className='font-bold'>urbandriveutosltd@gmail.com</p>
              </div>

              <div>
                  <h3 className="text-gray-600 mb-3">Feel Like Talking to us?</h3>
                  <div className="space-y-1 font-bold">
                      <p>+254 770070300 (Offiece)</p>
                      <p>+254 770070300 (Whatsapp)</p>
                      <p>+254 770070300 (Contact)</p>
                      <p>+254 722972201 (Contact)</p>
                  </div>
              </div>

              <div>
                  <h3 className="text-gray-600 mb-3">Social Share</h3>
                  <div className="flex space-x-4">
                      <a href="#https://www.facebook.com/urbandriveautosltd/" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700">
                          <FaFacebook size={20} />
                      </a>
                      <a href="#https://x.com/UrbanDriveAutos?t=FqAaqFH3g5-vusYu4zKAuw" className="bg-blue-400 p-2 rounded-full text-white hover:bg-blue-500">
                          <FaTwitter size={20} />
                      </a>
                      <a href="#https://www.instagram.com/urbandriveautos/" className="bg-red-500 p-2 rounded-full text-white hover:bg-red-600">
                          <FaInstagram size={20} />
                      </a>
                      <a href="#" className="bg-blue-700 p-2 rounded-full text-white hover:bg-blue-800">
                          <FaLinkedin size={20} />
                      </a>
                  </div>
              </div>
          </div>
          <div className='col-span-2'>
              <Contact />
          </div>
      </div><div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <Map />
          </div></>
  )
}
