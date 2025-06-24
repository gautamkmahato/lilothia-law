import Image from "next/image"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      position: "Managing Partner",
      specialization: "Corporate Law & Mergers",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 20 years of experience in corporate law, Sarah has successfully guided Fortune 500 companies through complex mergers and acquisitions worth over $2 billion.",
    },
    {
      name: "David Chen",
      position: "Senior Partner",
      specialization: "Litigation & Dispute Resolution",
      image: "/placeholder.svg?height=400&width=400",
      bio: "David is a seasoned litigator with an impressive track record in high-stakes commercial disputes and has argued cases before the Supreme Court.",
    },
    {
      name: "Maria Rodriguez",
      position: "Partner",
      specialization: "Employment & Labor Law",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Maria specializes in employment law and has helped numerous organizations navigate complex workplace regulations and labor disputes.",
    },
    {
      name: "James Thompson",
      position: "Partner",
      specialization: "Intellectual Property",
      image: "/placeholder.svg?height=400&width=400",
      bio: "James is an expert in intellectual property law, helping tech companies and innovators protect their most valuable assets through patents and trademarks.",
    },
  ]

  const values = [
    {
      title: "Excellence",
      description: "We maintain the highest standards of legal practice and client service in everything we do.",
      icon: "⚖️",
    },
    {
      title: "Integrity",
      description: "Our commitment to ethical practice and transparency builds lasting trust with our clients.",
      icon: "🛡️",
    },
    {
      title: "Innovation",
      description: "We leverage cutting-edge legal technology and creative strategies to achieve optimal outcomes.",
      icon: "💡",
    },
    {
      title: "Partnership",
      description: "We work collaboratively with our clients, becoming trusted advisors in their success.",
      icon: "🤝",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#132320] to-yellow-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mt-8 mb-6">About Our Firm</h1>
            <p className="text-lg md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              For over three decades, we have been providing exceptional legal counsel to businesses and individuals,
              building a reputation for excellence, integrity, and results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are dedicated to providing our clients with sophisticated legal solutions that protect their interests
              and advance their goals. Our commitment to excellence, combined with our deep understanding of the law and
              business, enables us to deliver results that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced attorneys bring decades of combined expertise across multiple practice areas to serve our
              clients' diverse needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-600 font-medium mb-4">{member.specialization}</p>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide every decision we make and every case we handle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Three Decades of Excellence</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since our founding in 1993, Mitchell & Associates has grown from a small practice to one of the region's
                most respected law firms. Our success is built on a foundation of legal expertise, client dedication,
                and unwavering commitment to justice.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Cases Won</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                  <div className="text-gray-600">Expert Attorneys</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Law firm office"
                width={800}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00B598] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a consultation and discover how our experienced legal team can help protect your
            interests and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
