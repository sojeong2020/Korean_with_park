// app/contact/page.tsx
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Ready to start your Korean learning journey? Let's talk!
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}