"use client"

import { useState } from "react"

export interface CircleSettings {
  outerCircle: {
    scale: number
    opacity: number
    x: number
    y: number
  }
  middleCircle: {
    scale: number
    opacity: number
    x: number
    y: number
  }
  frontCircle: {
    scale: number
    opacity: number
    x: number
    y: number
  }
  video: {
    scale: number
    opacity: number
    x: number
    y: number
    borderRadius: number
  }
}

interface CircleControlsProps {
  settings: CircleSettings
  onChange: (settings: CircleSettings) => void
}

export const CircleControls = ({ settings, onChange }: CircleControlsProps) => {
  const [isOpen, setIsOpen] = useState(true)

  const updateCircle = (
    circle: keyof CircleSettings,
    property: string,
    value: number
  ) => {
    onChange({
      ...settings,
      [circle]: {
        ...settings[circle],
        [property]: value,
      },
    })
  }

  const CircleSliders = ({
    title,
    circle,
  }: {
    title: string
    circle: keyof CircleSettings
  }) => (
    <div className="mb-4 p-3 bg-white/50 rounded-lg">
      <h3 className="font-semibold text-sm mb-2">{title}</h3>
      <div className="space-y-2">
        <div>
          <label className="text-xs flex justify-between">
            <span>Scale:</span>
            <span className="font-mono">{settings[circle].scale.toFixed(2)}</span>
          </label>
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.01"
            value={settings[circle].scale}
            onChange={(e) =>
              updateCircle(circle, "scale", parseFloat(e.target.value))
            }
            className="w-full"
          />
        </div>
        <div>
          <label className="text-xs flex justify-between">
            <span>Opacity:</span>
            <span className="font-mono">{settings[circle].opacity.toFixed(2)}</span>
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={settings[circle].opacity}
            onChange={(e) =>
              updateCircle(circle, "opacity", parseFloat(e.target.value))
            }
            className="w-full"
          />
        </div>
        <div>
          <label className="text-xs flex justify-between">
            <span>X Position:</span>
            <span className="font-mono">{settings[circle].x}px</span>
          </label>
          <input
            type="range"
            min="-500"
            max="500"
            step="1"
            value={settings[circle].x}
            onChange={(e) =>
              updateCircle(circle, "x", parseFloat(e.target.value))
            }
            className="w-full"
          />
        </div>
        <div>
          <label className="text-xs flex justify-between">
            <span>Y Position:</span>
            <span className="font-mono">{settings[circle].y}px</span>
          </label>
          <input
            type="range"
            min="-500"
            max="500"
            step="1"
            value={settings[circle].y}
            onChange={(e) =>
              updateCircle(circle, "y", parseFloat(e.target.value))
            }
            className="w-full"
          />
        </div>
      </div>
    </div>
  )

  const VideoSliders = () => (
    <div className="mb-4 p-3 bg-white/50 rounded-lg">
      <h3 className="font-semibold text-sm mb-2">Video (Dombra)</h3>
      <div className="space-y-2">
        <div>
          <label className="text-xs flex justify-between">
            <span>Scale:</span>
            <span className="font-mono">{settings.video.scale.toFixed(2)}</span>
          </label>
          <input
            type="range"
            min="0.1"
            max="5"
            step="0.01"
            value={settings.video.scale}
            onChange={(e) =>
              updateCircle("video", "scale", parseFloat(e.target.value))
            }
            className="w-full"
          />
        </div>
        <div>
          <label className="text-xs flex justify-between">
            <span>Opacity:</span>
            <span className="font-mono">{settings.video.opacity.toFixed(2)}</span>
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={settings.video.opacity}
            onChange={(e) =>
              updateCircle("video", "opacity", parseFloat(e.target.value))
            }
            className="w-full"
          />
        </div>
        <div>
          <label className="text-xs flex justify-between">
            <span>X Position:</span>
            <span className="font-mono">{settings.video.x}px</span>
          </label>
          <input
            type="range"
            min="-500"
            max="500"
            step="1"
            value={settings.video.x}
            onChange={(e) =>
              updateCircle("video", "x", parseFloat(e.target.value))
            }
            className="w-full"
          />
        </div>
        <div>
          <label className="text-xs flex justify-between">
            <span>Y Position:</span>
            <span className="font-mono">{settings.video.y}px</span>
          </label>
          <input
            type="range"
            min="-500"
            max="500"
            step="1"
            value={settings.video.y}
            onChange={(e) =>
              updateCircle("video", "y", parseFloat(e.target.value))
            }
            className="w-full"
          />
        </div>
        <div>
          <label className="text-xs flex justify-between">
            <span>Border Radius:</span>
            <span className="font-mono">{settings.video.borderRadius}px</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={settings.video.borderRadius}
            onChange={(e) =>
              updateCircle("video", "borderRadius", parseFloat(e.target.value))
            }
            className="w-full"
          />
        </div>
      </div>
    </div>
  )

  const copySettings = () => {
    const settingsString = JSON.stringify(settings, null, 2)
    navigator.clipboard.writeText(settingsString)
    alert("Settings copied to clipboard!")
  }

  return (
    <div className="fixed top-4 right-4 z-50 w-80">
      <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-700">
        <div
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-white font-bold text-lg">Circle Controls</h2>
          <button className="text-white text-xl">
            {isOpen ? "−" : "+"}
          </button>
        </div>
        
        {isOpen && (
          <div className="p-4 pt-0 max-h-[80vh] overflow-y-auto">
            <CircleSliders title="Outer Circle (Back)" circle="outerCircle" />
            <CircleSliders title="Middle Circle" circle="middleCircle" />
            <CircleSliders title="Front Circle" circle="frontCircle" />
            <VideoSliders />
            
            <button
              onClick={copySettings}
              className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              Copy Settings to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
