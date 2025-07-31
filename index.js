import React from "react";
import { Calendar, MapPin, PartyPopper } from "lucide-react";

export default function BirthdayLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 p-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-orange-900">Mike’s 40th Birthday in Puerto Rico!</h1>
        <p className="text-lg text-orange-800">February 20–22, 2026 · San Juan, PR 🇵🇷</p>

        <div className="bg-white shadow-xl rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-center gap-2 text-lg text-orange-700">
            <Calendar />
            <span>3 Days of Fun, Sun, and Celebration</span>
          </div>
          <ul className="text-left text-orange-800 list-disc list-inside">
            <li><strong>Thursday:</strong> Sunset welcome drinks 🌅</li>
            <li><strong>Friday:</strong> Beach day + Dinner party 🏖️</li>
            <li><strong>Saturday:</strong> Old San Juan + Big Night Out 💃🏽</li>
          </ul>

          <div className="flex items-center justify-center gap-2 text-lg text-orange-700">
            <MapPin />
            <span>Stay in Condado, Ocean Park, or Old San Juan</span>
          </div>

          <div className="text-center">
            <p className="text-sm text-orange-700">Closest airport: SJU (San Juan Luis Muñoz Marín)</p>
            <p className="text-sm text-orange-700">Plan to arrive by Thursday afternoon!</p>
          </div>
        </div>

        <div className="bg-white shadow-md p-4 rounded-xl">
          <h2 className="text-2xl font-semibold text-orange-900">RSVP</h2>
          <p className="text-orange-800">Let Mike know if you're coming by January 1, 2026.</p>
          <a
            className="inline-block mt-4 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg"
            href="#"
          >
            I'm In!
          </a>
        </div>

        <div className="text-center text-orange-700 pt-4">
          <PartyPopper className="inline mr-2" />
          Can’t wait to celebrate with you!
        </div>
      </div>
    </div>
  );
}