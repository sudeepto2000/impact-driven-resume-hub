
import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-10 bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sudeepto Hasan. All rights reserved.
          </p>
        </div>
        
        <nav>
          <ul className="flex gap-6">
            <li>
              <a 
                href="#about" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
