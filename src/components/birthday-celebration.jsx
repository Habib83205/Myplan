"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Heart, Sparkles, Gift, Cake } from "lucide-react"

export default function BirthdayCelebration() {
  const [isCardOpen, setIsCardOpen] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3,
        }}
        className="relative mb-2"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-pink-600 mb-2">Happy Birthday!</h1>
        <div className="flex justify-center gap-3">
          <Cake className="w-8 h-8 text-pink-500" />
          <Sparkles className="w-8 h-8 text-yellow-500" />
          <Heart className="w-8 h-8 text-pink-500" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mt-2">To My Cutiepie</h3>
      </motion.div>

      <motion.div
        className="w-full max-w-md mx-auto my-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div
          className={`relative cursor-pointer transition-all duration-700 ease-in-out transform ${isCardOpen ? "rotate-0" : "rotate-2"
            }`}
          onClick={() => setIsCardOpen(!isCardOpen)}
        >
          <div
            className={`bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-14 sm:p-10 shadow-lg transition-all duration-700 transform ${isCardOpen ? "scale-95" : "scale-100"
              }`}
          >
            <div className="absolute top-2 right-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-yellow-200" />
              </motion.div>
            </div>

            <div className="text-center text-white">
              <p className="text-lg font-medium mb-4">Tap to {isCardOpen ? "close" : "open"} your card</p>
              <div className="flex justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Gift className="w-14 h-14 text-white" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Card content */}
          <AnimatePresence>
            {isCardOpen && <motion.div
              className="absolute inset-0 bg-white max-[350px]:-top-6 max-[350px]:min-h-[275px] rounded-3xl p-4 shadow-xl shadow-rose-100 flex flex-col items-center justify-center"
              initial={{ rotate: 2, rotateX: -90, opacity: 0 }}
              animate={{
                rotate: isCardOpen ? 0 : 2,
                rotateX: isCardOpen ? 0 : -90,
                opacity: isCardOpen ? 1 : 0,
                zIndex: isCardOpen ? 10 : -1,
              }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <p className="text-purple-700 mb-2">
                I must love you
I know you are an innocent, kind, and gentle girl. I truly hope I can be worthy of you. If you could give me a chance to love you well   I really just want to sincerely tell you. I will love you until the flowers bloom and the birds sing  Until the Cowherd and Weaver Girl nod in approval of Until flowers bloom and birds flock around us Until every rainbow reflects your beauty. I will love you until the seas dry up and the rocks crumble, never regretting .I will still say I have no regrets in the next life .Let this beautiful song be sung to the girl I love. I really hope you give me a chance
 To love you
   Yours, Habib .
                </p>
                <p className="text-pink-600 font-medium">I hope your birthday is full of love, magic, and everything that makes you smile 💖</p>
                <div className="flex justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Heart className="w-8 h-8 stroke-none fill-rose-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-md mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-center">
          <p className="text-lg text-purple-700 mb-4">
           প্রিয়তমা, আমার... ❤️
কখনও কি ভেবেছো,তুমি আসার আগে আমার দিনগুলো কেমন ছিল?একঘেয়ে, নিরব, আর কেমন জানো—মনে হতো যেন সকাল আসে, চলে যায়…কিন্তু 'তুমি' নামে কিছুই আসেনা।আর এখন?এখন প্রতিটা সকাল মানে—তোমার মুখটা মনে পড়া প্রতিটা রাত মানে—তোমার স্বরে ঘুমিয়ে পড়া।তুমি শুধু আমার প্রেমিকা না,তুমি আমার প্রতীক্ষা, আমার চিঠির মতো দিন,যেটা ডাকপিয়নও সাবধানে বয়ে আনে,কারণ ভেতরে লেখা থাকে হৃদয়ের ভাষা।তুমি আমার ভালোবাসার গল্প না,তুমি সেই পাতাগুলো যেগুলো ছুঁয়ে ছুঁয়ে পড়ি প্রতিদিন।আজ তোমার জন্মদিন।তোমার জন্য কিছু বড় উপহার নেই,তবে একটা কথা আছি—তুমি হওয়ার পর আমার পৃথিবীটা আর আগের মতো নেই,আর আমি চাইলেও সেটা আর বদলাতে চাই না...
তোমার হাবিব
(যে তোমার হাসির মাঝে নিজের পৃথিবী খুঁজে পায়) 
          </p>
          <div className="flex justify-center items-center gap-2">
            <p className="text-pink-600 font-medium"> প্রিয় রানি ❤️
আজ এমন একজনের বিশেষ দিন—পৃথিবীর সবচেয়ে সুন্দর, সবচেয়ে আপন মানুষটির আজ জন্মদিন!...আর সেই মানুষটা তুমি, শুধু তুমি।তোমার জন্য আমার ভালোবাসাটা ঠিক এমন—চাঁদ যদি দাবি করে সে সবচেয়ে উজ্জ্বল, আমি বলবো—না, আমার রানির হাসির আলোয় চাঁদও হার মানে!সময় যদি ভাবে সে সব ভুলিয়ে দিতে পারে, আমি বলবো—না, আমার ভালোবাসা সময়ের ঊর্ধ্বে... চিরন্তন!হাবিবের চোখে 'রানি' মানে:একটা একরোখা অভিমান,একচিমটি দুষ্টামি,এক বুক ভালোবাসা,আর সারাজীবনের জন্য একখানা ঘর — ভালোবাসায় মোড়া।আজ জন্মদিনে শুধু এটুকুই বলি:তুমি যদি আমার হও,তাহলে জন্মদিন শুধু আজ নয় —আমার প্রতিটা দিনই তোমার প্রেমে উৎসব হয়ে ওঠে!ভালোবাসায়,
তোমার হাবিব
(যে চুপিচুপি তোমার ছবিতে চুমু খায়, আর মনে মনে প্রতিদিন তোমাকে বিয়ে করে...)
Let’s always stay like this... together, forever 🫶</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
