import { useEffect, useState, useCallback } from 'react';
import { useInterviewStore } from '../stores/interviewStore';
import { Clock, AlertTriangle, Skull } from 'lucide-react';

interface TimerProps {
  onTimeUp?: () => void;
  className?: string;
}

export default function Timer({ onTimeUp, className = '' }: TimerProps) {
  const { timerState, updateTimer, pauseTimer, resumeTimer } = useInterviewStore();
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (!timerState || !timerState.isRunning) return;

    const interval = setInterval(() => {
      const newRemaining = timerState.timeRemaining - 1;
      
      if (newRemaining <= 0) {
        updateTimer(0);
        onTimeUp?.();
        clearInterval(interval);
        return;
      }
      
      updateTimer(newRemaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [timerState?.isRunning, timerState?.timeRemaining]);

  if (!timerState) return null;

  const { timeRemaining, totalTime, isRunning } = timerState;
  const percentage = (timeRemaining / totalTime) * 100;
  
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Determine timer state
  const isCritical = percentage <= 10;
  const isWarning = percentage <= 25 && !isCritical;
  const isHalfway = percentage <= 50 && !isWarning && !isCritical;

  // Colors based on state
  let bgColor = 'bg-slate-800';
  let textColor = 'text-white';
  let progressColor = 'bg-green-500';
  let glowClass = '';
  let Icon = Clock;

  if (isCritical) {
    bgColor = 'bg-red-900/50';
    textColor = 'text-red-400';
    progressColor = 'bg-red-500';
    glowClass = 'animate-pulse shadow-lg shadow-red-500/50';
    Icon = Skull;
  } else if (isWarning) {
    bgColor = 'bg-orange-900/30';
    textColor = 'text-orange-400';
    progressColor = 'bg-orange-500';
    Icon = AlertTriangle;
  } else if (isHalfway) {
    bgColor = 'bg-yellow-900/20';
    textColor = 'text-yellow-400';
    progressColor = 'bg-yellow-500';
  }

  return (
    <div className={`${className}`}>
      <div className={`${bgColor} ${glowClass} rounded-xl p-4 border border-slate-700 transition-all duration-300`}>
        {/* Timer Display */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Icon className={`w-5 h-5 ${textColor}`} />
            <span className="text-slate-400 text-sm font-medium">Time Remaining</span>
          </div>
          <button
            onClick={() => isRunning ? pauseTimer() : resumeTimer()}
            className="text-xs px-3 py-1 rounded-full bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
          >
            {isRunning ? 'Pause' : 'Resume'}
          </button>
        </div>

        {/* Time Display */}
        <div className={`text-4xl font-mono font-bold ${textColor} text-center mb-3 ${isCritical ? 'animate-pulse' : ''}`}>
          {timeString}
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className={`h-full ${progressColor} transition-all duration-1000 ease-linear rounded-full`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Warning Messages */}
        {isCritical && (
          <div className="mt-3 text-center">
            <span className="text-red-400 text-sm font-semibold animate-pulse">
              ⚠️ WRAP IT UP! Time's almost up!
            </span>
          </div>
        )}
        {isWarning && !isCritical && (
          <div className="mt-3 text-center">
            <span className="text-orange-400 text-sm">
              ⏰ Less than 25% time remaining
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
