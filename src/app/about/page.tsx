// app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/pic.jpg"
                alt="Korean Teacher"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">안녕하세요! I'm your Korean Friend.</h2>
              <p className="text-gray-600">
                Native Korean speaker with 10+ years of teaching experience...
              </p>
              <p className="text-gray-600">
                I specialize in making Korean learning enjoyable and practical...
              </p>
              
              <div className="pt-4">
                <h3 className="font-semibold mb-2">Qualifications:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>M.A. in Korean Language Education</li>
                  <li>Certified Korean Language Instructor</li>
                  <li>TOPIK Perfect Scorer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}