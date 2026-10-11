import React, { useState } from 'react';
import { X, Terminal, ArrowRight, CornerDownLeft, RefreshCw } from 'lucide-react';
import { sound } from '../utils/audio';

export function AtmSimulatorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [balance, setBalance] = useState(15000);
  const [history, setHistory] = useState([
    { type: 'SYSTEM', msg: 'ATM Core Banking Engine v2.4 [C++ / SQL Ledger initialized]' },
    { type: 'SYSTEM', msg: 'Session opened for account: #99281-SURYANSHU' },
    { type: 'SYSTEM', msg: 'Type "help", "balance", "deposit <amount>", or "withdraw <amount>"' }
  ]);
  const [inputVal, setInputVal] = useState('');

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    sound.playPop();
    const parts = cmd.split(' ');
    const action = parts[0].toLowerCase();
    const amount = parseFloat(parts[1]);

    const newLogs = [...history, { type: 'USER', msg: `> ${cmd}` }];

    if (action === 'help') {
      newLogs.push({
        type: 'SYSTEM',
        msg: 'Available Commands: balance | deposit <amt> | withdraw <amt> | clear | statement'
      });
    } else if (action === 'balance') {
      sound.playLaser();
      newLogs.push({
        type: 'SYSTEM',
        msg: `ACID Account Balance: ₹${balance.toLocaleString('en-IN')} (Status: Verified via SQL Hash)`
      });
    } else if (action === 'deposit') {
      if (isNaN(amount) || amount <= 0) {
        newLogs.push({ type: 'ERROR', msg: 'ERR: Invalid deposit amount. Usage: deposit 500' });
      } else {
        const nextBal = balance + amount;
        setBalance(nextBal);
        sound.playSuccess();
        newLogs.push({
          type: 'SUCCESS',
          msg: `SUCCESS: Deposited ₹${amount.toLocaleString('en-IN')}. New Balance: ₹${nextBal.toLocaleString('en-IN')}`
        });
      }
    } else if (action === 'withdraw') {
      if (isNaN(amount) || amount <= 0) {
        newLogs.push({ type: 'ERROR', msg: 'ERR: Invalid withdraw amount. Usage: withdraw 500' });
      } else if (amount > balance) {
        sound.playBoing();
        newLogs.push({
          type: 'ERROR',
          msg: `ERR: Insufficient Funds. Current Balance is ₹${balance.toLocaleString('en-IN')}`
        });
      } else {
        const nextBal = balance - amount;
        setBalance(nextBal);
        sound.playLaser();
        newLogs.push({
          type: 'SUCCESS',
          msg: `SUCCESS: Dispensed ₹${amount.toLocaleString('en-IN')}. Updated Ledger Balance: ₹${nextBal.toLocaleString('en-IN')}`
        });
      }
    } else if (action === 'clear') {
      setHistory([{ type: 'SYSTEM', msg: 'Terminal cleared.' }]);
      setInputVal('');
      return;
    } else if (action === 'statement') {
      newLogs.push({
        type: 'SYSTEM',
        msg: `Ledger Snapshot: 1 Account Record, 0 Conflicts, SQL Locks Clean.`
      });
    } else {
      newLogs.push({
        type: 'ERROR',
        msg: `Unknown command "${action}". Type "help" for command list.`
      });
    }

    setHistory(newLogs);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#121212] text-white rounded-3xl border-comic-thick shadow-comic-xl overflow-hidden">
        
        {/* Terminal Header Bar */}
        <div className="bg-[#1f1f1f] px-5 py-3 border-b-2 border-white/20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500 border border-black inline-block"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-black inline-block"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-green-500 border border-black inline-block"></span>
            <span className="ml-2 font-mono text-xs font-bold text-[#F2C230]">
              atm_simulator.cpp // C++ CORE BANKING ENGINE
            </span>
          </div>

          <button
            onClick={() => {
              sound.playPop();
              onClose();
            }}
            className="p-1.5 rounded-lg bg-[#2a2a2a] text-white hover:bg-[#F27830] hover:text-black border border-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Terminal Screen Body */}
        <div className="p-5 font-mono text-xs sm:text-sm h-80 overflow-y-auto space-y-2 bg-[#0a0a0a]">
          {history.map((log, i) => (
            <div key={i} className="leading-relaxed">
              {log.type === 'USER' && (
                <span className="text-[#F294C8] font-bold">{log.msg}</span>
              )}
              {log.type === 'SYSTEM' && (
                <span className="text-gray-300">{log.msg}</span>
              )}
              {log.type === 'SUCCESS' && (
                <span className="text-emerald-400 font-bold">{log.msg}</span>
              )}
              {log.type === 'ERROR' && (
                <span className="text-red-400 font-bold">{log.msg}</span>
              )}
            </div>
          ))}
        </div>

        {/* Quick Helper Buttons */}
        <div className="bg-[#181818] px-5 py-2 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono">
          <button 
            onClick={() => setInputVal('balance')} 
            className="px-2.5 py-1 rounded bg-[#262626] hover:bg-[#F2C230] hover:text-black text-gray-200 border border-white/10 transition-colors"
          >
            balance
          </button>
          <button 
            onClick={() => setInputVal('deposit 2000')} 
            className="px-2.5 py-1 rounded bg-[#262626] hover:bg-[#F27830] hover:text-black text-gray-200 border border-white/10 transition-colors"
          >
            deposit 2000
          </button>
          <button 
            onClick={() => setInputVal('withdraw 1500')} 
            className="px-2.5 py-1 rounded bg-[#262626] hover:bg-[#F294C8] hover:text-black text-gray-200 border border-white/10 transition-colors"
          >
            withdraw 1500
          </button>
          <button 
            onClick={() => setInputVal('help')} 
            className="px-2.5 py-1 rounded bg-[#262626] hover:bg-white hover:text-black text-gray-200 border border-white/10 transition-colors"
          >
            help
          </button>
        </div>

        {/* Input Form */}
        <form onSubmit={handleCommand} className="bg-[#121212] p-4 border-t-2 border-white/20 flex items-center space-x-2">
          <span className="text-[#F2C230] font-mono font-bold">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command: e.g. deposit 1000..."
            className="flex-1 bg-transparent border-none text-white font-mono text-sm focus:outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="px-3 py-1.5 rounded-lg bg-[#F2C230] text-black font-bubble text-xs font-bold border-2 border-black hover:bg-[#F27830] transition-colors"
          >
            EXECUTE ↵
          </button>
        </form>

      </div>
    </div>
  );
}
