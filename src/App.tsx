import { AzureArchitectureDiagram } from './components/AzureArchitectureDiagram';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-blue-600">Enterprise Azure Landing Zone</h1>
          <p className="text-slate-600">
            Secure, compliant, and enterprise-ready Azure foundation
          </p>
        </div>
        <AzureArchitectureDiagram />
      </div>
    </div>
  );
}
