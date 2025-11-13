import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactFooter() {
  return (
    <footer className="bg-orange-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>Divine Trust Temple<br />123 Temple Road, Sacred District<br />City - 123456</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p>+91 89038 19811</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p>info@divinetemple.org</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Temple Timings:</p>
                  <p className="text-white/80">Morning: 6:00 AM - 12:00 PM</p>
                  <p className="text-white/80">Evening: 4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:border-white/40 resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80">© 2025 Divine Trust Temple. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Donation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
