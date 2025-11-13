import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { FacebookIconHD } from './FacebookIconHD';
import { YouTubeIconHD } from './YouTubeIconHD';
import { useState } from "react";
import {
  projectId,
  publicAnonKey,
} from "../utils/supabase/info";
import { useLanguage } from '../contexts/LanguageContext';
import { ShivaLogo } from './ShivaLogo';

export function ShivaContactFooter() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-9264c6c0/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(
          data.message ||
            t('contact.success'),
        );
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
          setStatusMessage("");
        }, 5000);
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          data.error ||
            t('contact.error'),
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setStatusMessage(
        t('contact.error'),
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-br from-gray-900 dark:from-black via-blue-900 dark:via-gray-900 to-indigo-900 dark:to-black text-white overflow-hidden transition-colors duration-300"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <ShivaLogo />
                  <div>
                    <h3 className="text-xl text-white">
                      {t('hero.title')}
                    </h3>
                    <p className="text-xs text-orange-200">
                      {t('hero.slogan')}
                    </p>
                  </div>
                </div>
                <p className="text-orange-100 leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-300" />
                  </div>
                  <div>
                    <p className="text-white mb-1">
                      Temple Address
                    </p>
                    <p className="text-orange-200 text-sm leading-relaxed">
                      Gnana Kailayam Agni Lingam Nanda malai
                      <br />
                      Devagiri veerabhadra durgam
                      <br />
                      Dharmapuri District, Palacode Taluk
                      <br />
                      Vellichandhai Bikkanahalli Road
                      <br />
                      Pincode: 636805
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-300" />
                  </div>
                  <div>
                    <p className="text-white mb-1">
                      Contact Numbers
                    </p>
                    <p className="text-orange-200 text-sm">
                      +91 89038 19811
                    </p>
                    <p className="text-orange-200 text-sm">
                      +91 63800 84253
                    </p>
                    <p className="text-orange-200 text-sm">
                      +91 96775 18561
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-300" />
                  </div>
                  <div>
                    <p className="text-white mb-1">Email</p>
                    <p className="text-orange-200 text-sm">
                      contact@gnanakailayam.com
                    </p>
                    <p className="text-orange-200 text-sm">
                      sivachandran@gnanakailayam.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orange-300" />
                  </div>
                  <div>
                    <p className="text-white dark:text-gray-200 mb-2">
                      {t('darshan.subtitle')}
                    </p>
                    <div className="space-y-1 text-sm">
                      <p className="text-orange-200">
                        Morning: 5:00 AM - 12:00 PM
                      </p>
                      <p className="text-orange-200">
                        Evening: 4:00 PM - 9:00 PM
                      </p>
                      <p className="text-orange-200">
                        Maha Aarti: 6:00 AM & 7:00 PM
                      </p>
                      <p className="text-amber-300">
                        Open all 365 days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <p className="text-white dark:text-gray-200 mb-4">
                  {t('footer.connectWith')}
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/sivachandran.pcr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-xl shadow-blue-500/30"
                  >
                    <FacebookIconHD size={28} className="text-white" />
                  </a>
                  <a
                    href="https://www.youtube.com/@NanaKailayam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-xl shadow-red-500/30"
                  >
                    <YouTubeIconHD size={28} className="text-white" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="mb-6 text-white dark:text-gray-100 text-2xl">
                  {t('contact.sendMessage')}
                </h3>
                <form
                  className="space-y-5"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-orange-200 dark:text-orange-300 mb-2">
                        {t('contact.name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('contact.namePlaceholder')}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/40 text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-orange-200 dark:text-orange-300 mb-2">
                        {t('contact.phone')} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t('contact.phonePlaceholder')}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/40 text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-orange-200 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('contact.emailPlaceholder')}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/40 text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-orange-200 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
                    >
                      <option value="" className="bg-gray-900">
                        Select a subject
                      </option>
                      <option
                        value="Puja Booking"
                        className="bg-gray-900"
                      >
                        Puja Booking
                      </option>
                      <option
                        value="Donation Inquiry"
                        className="bg-gray-900"
                      >
                        Donation Inquiry
                      </option>
                      <option
                        value="Temple Visit"
                        className="bg-gray-900"
                      >
                        Temple Visit
                      </option>
                      <option
                        value="Other"
                        className="bg-gray-900"
                      >
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-orange-200 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/40 text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all resize-none"
                      required
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <p className="text-green-200 text-sm">
                        {statusMessage}
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <p className="text-red-200 text-sm">
                        {statusMessage}
                      </p>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all text-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <h4 className="text-white mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#home"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#gallery"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white mb-3">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Daily Puja
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Special Abhishekam
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Rudrabhishekam
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Online Booking
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white mb-3">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Annual Reports
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Trust Documents
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Event Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Volunteer
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white mb-3">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Donation Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-orange-200 hover:text-white transition-colors"
                    >
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-orange-200">
                © 2025 Gnana Kailayam. All rights reserved.
              </p>
              <p className="text-orange-200">
                Designed by Naveen_Designs
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}