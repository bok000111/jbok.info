import React from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { greet } from '&/wasm';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold">JBOK</h1>
        <Button onClick={greet} className="mt-4">
          This button will trigger a WASM function
        </Button>
        <div className="flex justify-center mt-8">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default App;
