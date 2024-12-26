import React from 'react';

function Footer() {
  const socialMedia = [
    { icon: '📸', name: 'Instagram', count: '41,500+', color: 'text-pink-500' },
    { icon: '▶️', name: 'YouTube', count: '2,04,500+', color: 'text-red-500' },
    { icon: '💼', name: 'LinkedIn', count: '14,000+', color: 'text-blue-500' },
    { icon: '💬', name: 'WhatsApp', count: '57,000+', color: 'text-green-500' },
    { icon: '🎮', name: 'Discord', count: '12,400+', color: 'text-indigo-500' },
    { icon: '🐦', name: 'Twitter', count: '1,190+', color: 'text-sky-500' }
  ];

  const certifications = [
    'Postman API Fundamentals',
    'Student Expert Certification',
    'Figma Bootcamp',
    'HTML & CSS Bootcamp',
    'C++ Bootcamp',
    'GenAI 101 with Pieces',
    'Java Bootcamp',
    'JavaScript Bootcamp',
    'Excel Bootcamp',
    'React Bootcamp',
    'Git & GitHub Bootcamp',
    'DSA with Java Bootcamp',
    'Node.js Bootcamp',
    'Cyber Security and Ethical Hacking Bootcamp',
    'Placement Preparation Bootcamp',
    'Data Science with Python'
  ];

  const studyAbroad = [
    'MS in Big Data Analaytics',
    'MS in IT Management',
    'MS in Computing'
  ];

  const futuretech = [
    'India\'s Best BTech CSE',
    'BTech in VLSI & Semiconductors',
    'Executive MTech',
    'BTech in EV'
  ];

  const support = [
    'Terms & Conditions',
    'Privacy Policy',
    'Community Guidelines',
    'Refund Policy',
    'Verify Certificate'
  ];

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-8">LU ON SOCIAL MEDIA</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {socialMedia.map((platform) => (
              <div key={platform.name} className="flex items-center justify-center p-4 rounded-lg border hover:shadow-lg transition-shadow">
                <span className="text-2xl mr-2">{platform.icon}</span>
                <div className="text-left">
                  <div className="text-sm font-medium">{platform.name}</div>
                  <div className="text-lg font-bold">{platform.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-4">
              <img src="/placeholder.svg?height=60&width=60" alt="LU Logo" className="h-12" />
            </a>
            <p className="text-sm text-gray-600 mb-4">
              LetsUpgrade, a proud part of ITM Edutech, delivering industry-ready education.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              On a Mission to Upskill 10 Million People for Tech Industry with Live Instructors and Amazing Community for Upgrading Together
            </p>
            <div className="space-y-2">
              <a href="/about" className="block text-sm hover:underline">About</a>
              <a href="/contact" className="block text-sm hover:underline">Contact</a>
              <a href="/trainerpreneur" className="block text-sm hover:underline">Trainerpreneur Program</a>
              <a href="/careers" className="block text-sm hover:underline">Hire with LU</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">CERTIFICATIONS</h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    {cert}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">STUDY ABROAD</h3>
            <ul className="space-y-2">
              {studyAbroad.map((program) => (
                <li key={program}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    {program}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-bold mt-8 mb-4">SCHOOL OF FUTURETECH</h3>
            <ul className="space-y-2">
              {futuretech.map((program) => (
                <li key={program}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <p className="text-center text-sm text-gray-500 mb-4">
            2024 © LetsUpgrade EdTech Pvt. Ltd.
          </p>
          <p className="text-center text-xs text-gray-500 max-w-4xl mx-auto">
            LetsUpgrade EdTech Pvt. Ltd. is a completely owned subsidiary and operational division of ITM Edutech Training Pvt. Ltd., which is part of the ITM Group. LetsUpgrade, a business inside ITM Edutech Training India Pvt. Ltd., acts in accordance with ITM's aim to provide high-quality educational and training services. All material, trademarks, logos, and intellectual property shown on this website are the exclusive property of ITM Edutech Training India Pvt. Ltd. and LetsUpgrade EdTech Pvt. Ltd., and are protected under relevant intellectual property laws. Unauthorized use, copying, distribution, or exhibition of any content on this website is strictly forbidden and will result in legal action to the maximum degree allowed by law.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

