import { motion } from 'motion/react';
import { QrCode, Copy, Check, Smartphone, Building2, CreditCard } from 'lucide-react';
import { useState } from 'react';
import qrCodeImage from 'figma:asset/aa6712032d28aa88c939865528d267f70a3c42ce.png';
import { useLanguage } from '../contexts/LanguageContext';

export function DonationSection() {
  const { t } = useLanguage();
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const upiId = "9677518561@ybl";
  const accountNumber = "600531610";
  const ifscCode = "IDIB000V001";
  const bankName = "Indian Bank";
  const accountName = "P C R SIVACHANDRAN";

  const copyToClipboard = (text: string, type: 'upi' | 'account') => {
    navigator.clipboard.writeText(text);
    if (type === 'upi') {
      setCopiedUPI(true);
      setTimeout(() => setCopiedUPI(false), 2000);
    } else {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    }
  };

  return (
    <section id="donation-details" className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-black dark:from-gray-950 via-gray-900 dark:via-black to-black dark:to-gray-950 overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-orange-500/50">
              <span className="text-3xl sm:text-4xl">🙏</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl mb-4 sm:mb-6 bg-gradient-to-r from-orange-300 via-orange-100 to-orange-300 bg-clip-text text-transparent tracking-tight px-4">
            {t('donation.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            {t('donation.description')}
          </p>
        </motion.div>

        {/* Donation Options Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* QR Code & UPI Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* QR Code Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <QrCode className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl text-white">{t('donation.scanToPay')}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-300">{t('donation.quickSecure')}</p>
                </div>
              </div>

              {/* QR Code */}
              <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 flex items-center justify-center">
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={qrCodeImage} 
                    alt="Gnana Kailayam - Kubera Kailasanathar UPI Payment QR Code - 9677518561@ybl" 
                    className="w-48 h-48 sm:w-64 sm:h-64 rounded-xl object-contain"
                  />
                  {/* Scan indicator animation */}
                  <motion.div
                    className="absolute inset-0 border-2 border-orange-500/50 rounded-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-400">
                <Smartphone className="w-4 h-4 flex-shrink-0" />
                <span className="text-center">Compatible with Google Pay, PhonePe, Paytm & more</span>
              </div>
            </div>

            {/* UPI ID Card */}
            <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-orange-500/30 hover:border-orange-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl text-white">{t('donation.upiPayment')}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-300">{t('donation.directUpi')}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs sm:text-sm text-gray-400 mb-2 block">UPI ID</label>
                  <div className="flex items-center gap-3 bg-black/30 rounded-xl p-3 sm:p-4 border border-orange-500/20">
                    <code className="flex-1 text-orange-300 tracking-wide text-sm sm:text-base break-all">{upiId}</code>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => copyToClipboard(upiId, 'upi')}
                      className="w-10 h-10 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 flex items-center justify-center transition-colors flex-shrink-0"
                    >
                      {copiedUPI ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5 text-orange-400" />
                      )}
                    </motion.button>
                  </div>
                </div>

                <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/20">
                  <p className="text-xs sm:text-sm text-orange-200">
                    💡 <strong>Tip:</strong> Copy the UPI ID and paste it in your payment app
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bank Account Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all h-full">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl text-white">{t('donation.bankTransfer')}</h3>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {/* Account Name */}
                <div>
                  <label className="text-xs sm:text-sm text-gray-400 mb-2 block flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    Account Name
                  </label>
                  <div className="bg-black/30 rounded-xl p-3 sm:p-4 border border-orange-500/20">
                    <p className="text-base sm:text-lg text-white">{accountName}</p>
                  </div>
                </div>

                {/* Account Number */}
                <div>
                  <label className="text-xs sm:text-sm text-gray-400 mb-2 block">Account Number</label>
                  <div className="bg-black/30 rounded-xl p-3 sm:p-4 border border-orange-500/20">
                    <p className="text-gray-400 italic text-base sm:text-lg">{accountNumber}</p>
                  </div>
                </div>

                {/* IFSC Code */}
                <div>
                  <label className="text-xs sm:text-sm text-gray-400 mb-2 block">IFSC Code</label>
                  <div className="bg-black/30 rounded-xl p-3 sm:p-4 border border-orange-500/20">
                    <p className="text-gray-400 italic text-base sm:text-lg">{ifscCode}</p>
                  </div>
                </div>

                {/* Bank Name */}
                <div>
                  <label className="text-xs sm:text-sm text-gray-400 mb-2 block">Bank Name</label>
                  <div className="bg-black/30 rounded-xl p-3 sm:p-4 border border-orange-500/20">
                    <p className="text-gray-400 italic text-base sm:text-lg">{bankName}</p>
                  </div>
                </div>

                {/* Note */}
                <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20 mt-4 sm:mt-6">
                  <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                    📌 <strong>Note:</strong> Please send us an email at <span className="text-purple-300 break-all">donations@gnanakailayam.org</span> with transaction details for 80G tax exemption certificate.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <div className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-orange-500/20 backdrop-blur-xl rounded-full border border-orange-500/30">
            <p className="text-orange-200 text-sm sm:text-base">
              🙏 Your contribution is a blessing. May Lord Shiva shower his grace upon you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
