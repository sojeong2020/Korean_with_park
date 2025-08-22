// app/resources/page.tsx
import { FileText, Headphones, Video, Download } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Hangul Guide PDF',
      description: 'Complete guide to Korean alphabet',
      icon: FileText,
      link: 'https://drive.google.com/file/d/15dEsGmtcEDhmJaOpLrZqnhNlKTSV0SIu/view?usp=sharing',
      type: 'Download PDF'
    },
    {
      title: 'Basic Phrases PDF',
      description: '50 essential Korean phrases with pronunciation',
      icon: Headphones,
      link: 'https://drive.google.com/file/d/1QrnwoBJ4gRBb6aWx7mX5YhDOQytt5AYc/view?usp=sharing',
      type: 'Download PDF'
    },
    {
      title: 'Korean Alphabet',
      description: 'Introduction to Basic vowels Video',
      icon: Video,
      link: 'https://www.youtube.com/watch?v=T5KyQXid6v4',
      type: 'Watch Video'
    },
    {
        title: 'Korean podcast Video',
        description: 'Talking about Korean Cafe culture',
        icon: Video,
        link: 'https://www.youtube.com/watch?v=nFC-0zidnqc&t=1s',
        type: 'Watch Video'
      }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl text-green-900 font-bold text-center mb-4">Free Resources</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Download these free materials to support your Korean learning journey
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <resource.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <a
                      href={resource.link}
                      className="text-green-950 font-medium hover:text-indigo-700 flex items-center"
                    >
                      <Download className="w-4 h-4 mr-1 text-green-900" />
                      {resource.type}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}