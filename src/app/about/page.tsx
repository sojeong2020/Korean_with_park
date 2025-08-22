// app/about/page.tsx
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12 text-green-900">안녕하세요. I'm your Korean Friend.</h1>
          
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
              <p className="text-gray-600 text-2xl">
              I have over 10 years teaching experience in Korea.
              I have taught a wide range of students from 5 years old to 70 years old so I understand learning foreign language could be challenging for everyone.
              </p>
              <p className="text-gray-600 text-2xl">
              My lessons are friendly and will be focused on your goals we set .
              I can help you to improve your Korean from basic to advanced level step by step.
              </p>

               <div className="pt-4">
                <h2 className="font-semibold mb-2">Qualifications</h2>
                <h2 className="text-gray-600">
                TESOL(Teaching English to Speakers of Other Language)-Kelly College, Brisbane, Australia
              </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}