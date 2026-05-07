export const metadata = { 
  title: ' Video Editor — Revolutionize Your Video Editing', 
  description:Streamline your video editing process with our AI-powered video editor'
}

export default function Page() {
  return    <div>
      {/* NAV BAR */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur border-b border-zinc-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-zinc-900 w-8 h-8 mr-2" />
            <h1 className="text-zinc-900 font-bold text-lg">AI Video Editor</h1>
          </div>
          <ul className="flex items-center space-x-6">
            <li>
              <a href="#" className="text-zinc-600 hover:text-zinc-900">Features</a>
            </li>
            <li>
              <a href="#" className="text-zinc-600 hover:text-zinc-900">Pricing</a>
            </li>
            <li>
              <button className="bg-zinc-900 text-white rounded-lg px-4 py-2">Open Dashboard →</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
        <div className="bg-zinc-900/50 py-2 px-4 rounded-full text-xs">AI-Powered SaaS</div>
        <h1 className="font-black text-5xl md:text-7xl tracking-tight leading-none">Revolutionize Video Editing</h1>
        <p className="text-zinc-400 text-xl mt-4">Streamline your video editing process with our AI-powered video editor</p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
          <a href="/dashboard" className="bg-white text-zinc-900 font-bold rounded-xl px-8 py-4 shadow-lg hover:shadow-xl">Start Free Today →</a>
          <a href="/dashboard" className="border border-zinc-600 text-zinc-300 rounded-xl px-8 py-4 hover:bg-zinc-800">See It Live →</a>
        </div>
        <div className="rounded-2xl bg-zinc-800/50 border border-zinc-700 p-6 max-w-3xl mx-auto mt-12">
          <div className="bg-zinc-700 h-4 w-16 animate-pulse" />
          <div className="bg-indigo-500 h-4 w-12" />
          <div className="bg-emerald-500 h-4 w-8" />
          <div className="bg-zinc-700 h-4 w-16 animate-pulse" />
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="bg-zinc-800/30 border-y border-zinc-700/50 py-8 flex justify-center space-x-12">
        <div className="flex items-center space-x-2">
          <span className="font-black text-white text-2xl">10,000+</span>
          <span className="text-zinc-400 text">Users</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-black text-white text-2xl">99.9%</span>
          <span className="text-zinc-400 text-sm">Uptime</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-black text-white text-2xl">$50M+</span>
          <span className="text-zinc-400 text-sm">Processed</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-black text-white text-2xl">4.9★</span>
          <span className="text-zinc-400 text-sm">Rating</span>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white py-24 px-6">
        <h2 className="text-zinc-900 font-black text-4xl text-center">Everything you need to edit videos</h2>
        <p className="text-zinc-500 mt-3 text-center max-w-2xl mx-auto">Streamline your video editing process with our AI-powered video editor</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 p-3 rounded-xl">
              <Lucide.Video size={24} className="text-indigo-500" />
            </div>
            <h3 className="text-zinc-900 font-bold mt-4">Video Editing</h3>
            <p className="text-zinc-500 text-sm mt-2">Edit your videos with our AI-powered video editor</p>
          </div>
          <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow">
            <div className="bg-emerald-100 p-3 rounded-xl">
              <Lucide.Audio size={24} className="text-emerald-500" />
            </div>
            <h3 className="text-zinc-900 font-bold mt-4">Audio Editing</h3>
            <p className="text-zinc-500 text-sm mt-2">Edit your audio with our AI-powered audio editor</p>
          </div>
          <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition-shadow">
            <div className="bg-zinc-100 p-3 rounded-xl">
              <Lucide.Picture size={24} className="text-zinc-500" />
            </div>
            <h3 className="text-zinc-900 font-bold mt-4">Color Grading</h3>
            <p className="text-zinc-500 text-sm mt-2">Enhance your videos with our AI-powered color grading</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-zinc-50 py-24 px-6">
        <h2 className="text-zinc-900 font-black text-4xl text-center">How AI Video Editor works</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12 mt-12">
          <div className="flex flex-col items-center space-y-4">
            <span className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl">1</span>
            <h3 className="text-zinc-900 font-bold">Upload Your Video</h3>
            <p className="text-zinc-500 text-sm">Upload your video to our platform</p>
            <Lucide.ChevronDown size={24} className="text-zinc-500" />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <span className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl">2</span>
            <h3 className="text-zinc-900 font-bold">Select Editing Options</h3>
            <p className="text-zinc-500 text-sm">Select your editing options</p>
            <Lucide.ChevronDown size={24} className="text-zinc-500" />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <span className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl">3</span>
            <h3 className="text-zinc-900 font-bold">Download Your Edited Video</h3>
            <p className="text-zinc-500 text-sm">Download your edited video</p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="bg-white py-24 px-6">
        <h2 className="text-zinc-900 font-black text-4xl text-center">Simple, transparent pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6">
            <h3 className="text-zinc-900 font-bold mt-4">Free</h3>
            <p className="text-zinc-500 text-sm mt-2">$0/mo</p>
            <ul className="list-disc space-y-2 mt-4">
              <li>Up to 1 hour of video editing</li>
              <li>Basic editing features</li>
            </ul>
            <button className="bg-zinc-900 text-white rounded-lg px-4 py-2 mt-8">Get Started</button>
          </div>
          <div className="bg-zinc-900 text-white rounded-2xl border border-zinc-100 p-6 scale-105">
            <h3 className="text-white font-bold mt-4">Pro</h3>
            <p className="text-white text-sm mt-2">$99/mo</p>
            <ul className="list-disc space-y-2 mt-4">
              <li>Up to 10 hours of video editing</li>
              <li>Advanced editing features</li>
              <li>Priority support</li>
            </ul>
            <button className="bg-white text-zinc-900 rounded-lg px-4 py-2 mt-8">Upgrade to Pro</button>
          </div>
          <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6">
            <3 className="text-zinc-900 font-bold mt-4">Enterprise</h3>
            <p className="text-zinc-500 text-sm mt-2">Custom pricing</p>
            <ul className="list-disc space-y-2 mt-4">
              <li>Unlimited video editing</li>
              <li>Advanced editing features</li>
              <li>Priority support</li>
              <li>SLA and support</li>
            </ul>
            <button className="bg-zinc-900 text-white rounded-lg px-4 py-2 mt-8">Contact Us</button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-zinc-50 py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-2xl border border-zinc-100 p-6">
            <p className="text-zinc-500 text-sm">AI Video Editor has saved me so much time and effort. I can finally focus on creating content instead of editing it.</p>
            <div className="flex items-center space-x-4 mt-4">
              <img src="https://example.com/avatar1.jpg" alt="Avatar" className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="text-zinc-900 font-bold">Emily Chen</h3>
                <p className="text-zinc-500 text-sm">Social Media Influencer</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-zinc-100 p-6">
            <p className="text-zinc-500 text-sm">I was blown away by the quality of the edited videos. AI Video Editor is a game-changer for my business.</p>
            <div className="flex items-center space-x-4 mt-4">
              <img src="https://example.com/avatar2.jpg" alt="Avatar" className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="text-zinc-900 font-bold">David Lee</h3>
                <p className="text-zinc-500 text-sm">Video Editor</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-zinc-100 p-6">
            <p className="text-zinc-500 text-sm">I was skeptical at first, but AI Video Editor has exceeded my expectations. The support team is also very responsive and helpful.</p>
            <div className="flex items-center space-x-4 mt-4">
              <img src="https://example.com/avatar3.jpg" alt="Avatar" className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="text-zinc-900 font-bold">Sarah Kim</h3>
                <p className="text-zinc-500 text-sm">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-24 px-6 text-center">
        <h2 className="font-black text-4xl">Launch Your Video Editing Journey Today</h2>
        <p className="text-zinc-400 text-xl mt-4">Start editing your videos with AI Video Editor</p>
        <a href="/dashboard" className="bg-white text-indigo-900 font-bold rounded-lg px-4 py-2 mt-8">Launch Dashboard →</a>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 text-zinc-400 py-12 px-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="bg-zinc-900 w-8 h-8 mr-2" />
            <h1 className="text-zinc-100 font-bold text-lg">AI Video Editor</h1>
            <p className="text-zinc-500 text-sm mt-2">Built with NEXUS OS</p>
          </div>
          <ul className="flex items-center space-x-6">
            <li>
              <a href="#" className="text-zinc-400 hover:text-zinc-100">Features</a>
            </li>
            <li>
              <a href="#" className="text-zinc-400 hover:text-zinc-100">Pricing</a>
            </li>
            <li>
              <a href="#" className="text-zinc-400 hover:text-zinc-100">Dashboard</a>
            </li>
          </ul>
        </div>
        <div className="text-zinc-500 text-sm mt-4 text-center">
          &copy; 2025 AI Video Editor. All rights reserved.
        </div>
      </footer>
    </div>
  )
}