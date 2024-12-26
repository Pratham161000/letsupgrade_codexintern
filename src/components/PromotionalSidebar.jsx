import React from 'react';

function PromotionalSidebar() {
  return (
    <aside className="w-80 p-4 border-l bg-white">
      <div className="space-y-4">
        <div className="border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <img 
              src="/placeholder.svg" 
              alt="LetsUpgrade Logo" 
              className="w-8 h-8"
            />
            <div>
              <h3 className="font-bold">Lets Upgrade</h3>
              <span className="text-red-500 text-sm">Subscribe</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">Subscribe to our new channel!</p>
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">
            Become Student Ambassador & get
          </h3>
          <img 
            src="/placeholder.svg" 
            alt="Student Ambassador Benefits" 
            className="w-full"
          />
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">
            Join Postman API Bootcamp & Get a chance to WIN
          </h3>
          <img 
            src="/placeholder.svg" 
            alt="Postman API Bootcamp Prizes" 
            className="w-full"
          />
        </div>
      </div>
    </aside>
  );
}

export default PromotionalSidebar;

