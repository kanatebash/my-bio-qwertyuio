import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Send, Code, ShieldCheck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl w-full bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 shadow-2xl relative z-10"
      >
        <div className="flex justify-center mb-6">
          <motion.div whileHover={{ scale: 1.05 }} className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500" />
            <img 
              src="https://placeholder.com" 
              alt="Avatar" 
              className="relative w-28 h-28 rounded-full object-cover border-2 border-slate-900"
            />
          </motion.div>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Фуллстек Инженер
          </h1>
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mt-2 flex items-center justify-center gap-1.5">
            <Cpu size={16} /> Искусственный Интеллект
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-950/60 border border-slate-800/50 rounded-2xl p-5 mb-8 text-slate-300 leading-relaxed text-sm text-justify space-y-4"
        >
          <div className="flex items-center gap-2 text-blue-500 font-mono text-xs border-b border-slate-800/80 pb-2">
            <Terminal size={14} /> root@system:~# info
          </div>
          <p>
            Программист в сфере искусственного интеллекта. Выступал ключевым партнёром в масштабных ИИ-проектах и помогал в их создании с самых ранних этапов разработки архитектуры.
          </p>
          <p>
            Сейчас активно занимается развитием технологической платформы <span className="text-white font-semibold underline decoration-blue-500/50">Kalshi</span>, где лично спроектировал и внедрил уникальную технологию, интегрировав в ядро базы данных более <span className="text-blue-400 font-bold">7000 базовых, мощных и сложных кодов</span>.
          </p>
          <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono pt-1">
            <ShieldCheck size={14} /> Производительность системы: Оптимальная
          </div>
        </motion.div>

        <div className="space-y-4">
          <motion.a 
            whileHover={{ y: -2, backgroundColor: "rgb(30, 41, 59)" }}
            whileTap={{ scale: 0.98 }}
            href="https://t.me" 
            target="_blank"
            className="flex items-center justify-between w-full bg-slate-800/40 border border-slate-700/50 text-white px-5 py-4 rounded-xl font-medium transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Send size={18} />
              </div>
              <span>Связаться в Telegram</span>
            </div>
            <span className="text-slate-500 group-hover:text-slate-300 transition-colors">→</span>
          </motion.a>

          <motion.a 
            whileHover={{ y: -2, backgroundColor: "rgb(30, 41, 59)" }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com" 
            target="_blank"
            className="flex items-center justify-between w-full bg-slate-800/40 border border-slate-700/50 text-white px-5 py-4 rounded-xl font-medium transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Code size={18} />
              </div>
              <span>Портфолио GitHub</span>
            </div>
            <span className="text-slate-500 group-hover:text-slate-300 transition-colors">→</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
